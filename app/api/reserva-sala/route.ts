import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { reservaSalaSchema } from '@/lib/validations/reserva-sala';

const TURNO_LABELS = { manha: 'Manhã', tarde: 'Tarde', noite: 'Noite' } as const;
const TIPO_LABELS = {
  video: 'Vídeo',
  podcast: 'Podcast',
  mentoria: 'Mentoria / Curso',
  reuniao: 'Reunião',
  outro: 'Outro',
} as const;

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const parsed = reservaSalaSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      console.warn('[reserva-sala] RESEND_API_KEY não configurada, email não enviado');
      console.warn('[reserva-sala] Dados recebidos (dev):', data.nome, data.tipoUso, data.dataDesejada);
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailTo = process.env.RESERVA_EMAIL_TO ?? 'contato@vcareessence.com.br';

    await resend.emails.send({
      from: 'VCare Essence <noreply@vcareessence.com.br>',
      to: emailTo,
      replyTo: data.email,
      subject: `Solicitação de sala, ${data.nome} (${TIPO_LABELS[data.tipoUso]}, ${data.dataDesejada})`,
      html: `
        <h2>Solicitação de reserva, sala para gravações</h2>
        <table>
          <tr><td><strong>Nome</strong></td><td>${data.nome}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>WhatsApp</strong></td><td>${data.whatsapp}</td></tr>
          <tr><td><strong>Instagram</strong></td><td>${data.instagram ?? ', '}</td></tr>
          <tr><td><strong>Tipo de uso</strong></td><td>${TIPO_LABELS[data.tipoUso]}</td></tr>
          <tr><td><strong>Data desejada</strong></td><td>${data.dataDesejada}</td></tr>
          <tr><td><strong>Turno</strong></td><td>${TURNO_LABELS[data.turno]}</td></tr>
          <tr><td><strong>Equipamento</strong></td><td>${data.equipamento ?? ', '}</td></tr>
        </table>
        ${data.informacoesAdicionais ? `<h3>Informações adicionais</h3><p>${data.informacoesAdicionais}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[reserva-sala] Erro ao processar:', err);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
