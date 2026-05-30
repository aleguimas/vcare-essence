'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { candidaturaSchema, type CandidaturaInput } from '@/lib/validations/candidatura';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

const inputClass =
  'w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-body text-ink placeholder:text-muted/50 font-sans transition-colors duration-200 focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/20 disabled:opacity-50';

const labelClass = 'block text-small font-sans font-medium text-moss mb-1.5';
const errorClass = 'mt-1.5 text-small text-red-600 font-sans';

export function CandidaturaResidente() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CandidaturaInput>({ resolver: zodResolver(candidaturaSchema) });

  const onSubmit = async (data: CandidaturaInput) => {
    try {
      const res = await fetch('/api/candidatura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Erro ao enviar');

      trackEvent('form_submit', { form_name: 'candidatura_residente' });
      toast.success('Candidatura enviada. Entraremos em contato em até 5 dias úteis.');
      reset();
    } catch {
      toast.error('Algo não funcionou. Tente novamente ou fale pelo WhatsApp.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nome */}
        <div>
          <label htmlFor="c-nome" className={labelClass}>
            Nome completo <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="c-nome"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            className={cn(inputClass, errors.nome && 'border-red-400 focus:ring-red-200')}
            {...register('nome')}
          />
          {errors.nome && <p className={errorClass}>{errors.nome.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="c-email" className={labelClass}>
            Email <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            placeholder="voce@email.com"
            className={cn(inputClass, errors.email && 'border-red-400 focus:ring-red-200')}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="c-whatsapp" className={labelClass}>
            WhatsApp <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="c-whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="(81) 99999-9999"
            className={cn(inputClass, errors.whatsapp && 'border-red-400 focus:ring-red-200')}
            {...register('whatsapp')}
          />
          {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
        </div>

        {/* Especialidade */}
        <div>
          <label htmlFor="c-especialidade" className={labelClass}>
            Especialidade clínica <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="c-especialidade"
            type="text"
            placeholder="Ex: Psicologia clínica, Psiquiatria..."
            className={cn(inputClass, errors.especialidade && 'border-red-400 focus:ring-red-200')}
            {...register('especialidade')}
          />
          {errors.especialidade && <p className={errorClass}>{errors.especialidade.message}</p>}
        </div>

        {/* Registro */}
        <div>
          <label htmlFor="c-registro" className={labelClass}>
            Registro profissional <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="c-registro"
            type="text"
            placeholder="CRP XX/XXXXX"
            className={cn(inputClass, errors.registro && 'border-red-400 focus:ring-red-200')}
            {...register('registro')}
          />
          {errors.registro && <p className={errorClass}>{errors.registro.message}</p>}
        </div>

        {/* Anos de experiência */}
        <div>
          <label htmlFor="c-anos" className={labelClass}>
            Anos de prática
          </label>
          <input
            id="c-anos"
            type="text"
            placeholder="Ex: 5 anos"
            className={inputClass}
            {...register('anosExperiencia')}
          />
        </div>
      </div>

      {/* Abordagem */}
      <div>
        <label htmlFor="c-abordagem" className={labelClass}>
          Abordagem terapêutica
        </label>
        <input
          id="c-abordagem"
          type="text"
          placeholder="Ex: TCC, Análise do Comportamento, Sistêmica..."
          className={inputClass}
          {...register('abordagem')}
        />
      </div>

      {/* Link */}
      <div>
        <label htmlFor="c-link" className={labelClass}>
          Site ou Instagram (opcional)
        </label>
        <input
          id="c-link"
          type="url"
          placeholder="https://..."
          className={cn(inputClass, errors.linkPerfil && 'border-red-400 focus:ring-red-200')}
          {...register('linkPerfil')}
        />
        {errors.linkPerfil && <p className={errorClass}>{errors.linkPerfil.message}</p>}
      </div>

      {/* Motivação */}
      <div>
        <label htmlFor="c-motivacao" className={labelClass}>
          Por que você quer integrar a VCare? <span className="text-bronze" aria-hidden="true">*</span>
        </label>
        <textarea
          id="c-motivacao"
          rows={5}
          placeholder="Conte em suas palavras — o que te atrai nesse projeto e como você se encaixa nele..."
          className={cn(inputClass, 'resize-none', errors.motivacao && 'border-red-400 focus:ring-red-200')}
          {...register('motivacao')}
        />
        {errors.motivacao && <p className={errorClass}>{errors.motivacao.message}</p>}
      </div>

      {/* Consentimento LGPD */}
      <div className="flex items-start gap-3">
        <input
          id="c-consentimento"
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-line text-bronze focus:ring-bronze cursor-pointer"
          {...register('consentimento')}
        />
        <label htmlFor="c-consentimento" className="text-small text-muted font-sans cursor-pointer leading-relaxed">
          Concordo que a VCare Essence armazene e utilize estes dados para avaliar minha candidatura,
          conforme a{' '}
          <Link href={ROUTES.politicaPrivacidade} className="text-bronze underline underline-offset-2 hover:text-bronze-400">
            Política de Privacidade
          </Link>
          .{' '}
          <span className="text-bronze" aria-hidden="true">*</span>
        </label>
      </div>
      {errors.consentimento && <p className={cn(errorClass, '-mt-4')}>{errors.consentimento.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-moss text-cream font-sans font-medium transition-all duration-400 ease-soft hover:bg-moss-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando…' : 'Enviar candidatura'}
      </button>

      <p className="text-small text-muted font-sans">
        Campos marcados com <span className="text-bronze-400">*</span> são obrigatórios.
        Responderemos em até 5 dias úteis.
      </p>
    </form>
  );
}
