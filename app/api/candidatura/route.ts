import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { candidaturaSchema } from '@/lib/validations/candidatura';

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const parsed = candidaturaSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      // Em desenvolvimento sem API key: loga e retorna sucesso
      console.warn('[candidatura] RESEND_API_KEY não configurada — email não enviado');
      console.warn('[candidatura] Dados recebidos (dev):', data.nome, data.email);
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailTo = process.env.CANDIDATURA_EMAIL_TO ?? 'contato@vcareessence.com.br';

    await resend.emails.send({
      from: 'VCare Essence <noreply@vcareessence.com.br>',
      to: emailTo,
      replyTo: data.email,
      subject: `Nova candidatura — ${data.nome} (${data.especialidade})`,
      html: `
        <h2>Nova candidatura para consultório residente</h2>
        <table>
          <tr><td><strong>Nome</strong></td><td>${data.nome}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>WhatsApp</strong></td><td>${data.whatsapp}</td></tr>
          <tr><td><strong>Especialidade</strong></td><td>${data.especialidade}</td></tr>
          <tr><td><strong>Registro</strong></td><td>${data.registro}</td></tr>
          <tr><td><strong>Abordagem</strong></td><td>${data.abordagem ?? '—'}</td></tr>
          <tr><td><strong>Anos de experiência</strong></td><td>${data.anosExperiencia ?? '—'}</td></tr>
          <tr><td><strong>Perfil</strong></td><td>${data.linkPerfil ?? '—'}</td></tr>
        </table>
        <h3>Por que quer integrar a VCare?</h3>
        <p>${data.motivacao}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[candidatura] Erro ao processar:', err);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
