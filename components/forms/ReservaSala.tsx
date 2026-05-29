'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  reservaSalaSchema,
  type ReservaSalaInput,
  TIPOS_USO,
  TURNOS,
} from '@/lib/validations/reserva-sala';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

const inputClass =
  'w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-body text-ink placeholder:text-muted/50 font-sans transition-colors duration-200 focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/20 disabled:opacity-50';

const labelClass = 'block text-small font-sans font-medium text-moss mb-1.5';
const errorClass = 'mt-1.5 text-small text-red-600 font-sans';

const TIPO_OPTIONS: { value: (typeof TIPOS_USO)[number]; label: string }[] = [
  { value: 'video', label: 'Vídeo (YouTube, Reels, TikTok)' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'mentoria', label: 'Mentoria ou curso gravado' },
  { value: 'reuniao', label: 'Reunião estratégica' },
  { value: 'outro', label: 'Outro' },
];

const TURNO_OPTIONS: { value: (typeof TURNOS)[number]; label: string }[] = [
  { value: 'manha', label: 'Manhã (8h–12h)' },
  { value: 'tarde', label: 'Tarde (13h–17h)' },
  { value: 'noite', label: 'Noite (18h–22h)' },
];

export function ReservaSala() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservaSalaInput>({ resolver: zodResolver(reservaSalaSchema) });

  const onSubmit = async (data: ReservaSalaInput) => {
    try {
      const res = await fetch('/api/reserva-sala', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Erro ao enviar');

      trackEvent('form_submit', { form_name: 'reserva_sala' });
      toast.success('Solicitação recebida. Confirmamos disponibilidade em até 24h.');
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
          <label htmlFor="r-nome" className={labelClass}>
            Nome <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="r-nome"
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
          <label htmlFor="r-email" className={labelClass}>
            Email <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="r-email"
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
          <label htmlFor="r-whatsapp" className={labelClass}>
            WhatsApp <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="r-whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="(81) 99999-9999"
            className={cn(inputClass, errors.whatsapp && 'border-red-400 focus:ring-red-200')}
            {...register('whatsapp')}
          />
          {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
        </div>

        {/* Instagram */}
        <div>
          <label htmlFor="r-instagram" className={labelClass}>
            Instagram ou canal (opcional)
          </label>
          <input
            id="r-instagram"
            type="text"
            placeholder="@seu_perfil"
            className={inputClass}
            {...register('instagram')}
          />
        </div>

        {/* Tipo de uso */}
        <div>
          <label htmlFor="r-tipo" className={labelClass}>
            Tipo de uso <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <select
            id="r-tipo"
            className={cn(inputClass, 'cursor-pointer', errors.tipoUso && 'border-red-400 focus:ring-red-200')}
            {...register('tipoUso')}
          >
            <option value="">Selecione...</option>
            {TIPO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.tipoUso && <p className={errorClass}>{errors.tipoUso.message}</p>}
        </div>

        {/* Turno */}
        <div>
          <label htmlFor="r-turno" className={labelClass}>
            Turno preferido <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <select
            id="r-turno"
            className={cn(inputClass, 'cursor-pointer', errors.turno && 'border-red-400 focus:ring-red-200')}
            {...register('turno')}
          >
            <option value="">Selecione...</option>
            {TURNO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.turno && <p className={errorClass}>{errors.turno.message}</p>}
        </div>

        {/* Data */}
        <div className="sm:col-span-2">
          <label htmlFor="r-data" className={labelClass}>
            Data desejada <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <input
            id="r-data"
            type="date"
            className={cn(inputClass, errors.dataDesejada && 'border-red-400 focus:ring-red-200')}
            {...register('dataDesejada')}
          />
          {errors.dataDesejada && <p className={errorClass}>{errors.dataDesejada.message}</p>}
        </div>
      </div>

      {/* Equipamento */}
      <div>
        <label htmlFor="r-equipamento" className={labelClass}>
          Equipamento que você traz (opcional)
        </label>
        <textarea
          id="r-equipamento"
          rows={3}
          placeholder="Ex: câmera mirrorless, microfone shotgun, ring light..."
          className={cn(inputClass, 'resize-none')}
          {...register('equipamento')}
        />
      </div>

      {/* Info adicional */}
      <div>
        <label htmlFor="r-info" className={labelClass}>
          Informações adicionais (opcional)
        </label>
        <textarea
          id="r-info"
          rows={3}
          placeholder="Algo mais que a gente deva saber sobre sua necessidade..."
          className={cn(inputClass, 'resize-none')}
          {...register('informacoesAdicionais')}
        />
      </div>

      {/* Consentimento LGPD */}
      <div className="flex items-start gap-3">
        <input
          id="r-consentimento"
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-line text-bronze focus:ring-bronze cursor-pointer"
          {...register('consentimento')}
        />
        <label htmlFor="r-consentimento" className="text-small text-muted font-sans cursor-pointer leading-relaxed">
          Concordo que a VCare Essence armazene estes dados para processar minha solicitação,
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
        {isSubmitting ? 'Enviando…' : 'Solicitar reserva'}
      </button>

      <p className="text-small text-muted font-sans">
        Campos marcados com <span className="text-bronze">*</span> são obrigatórios.
        Confirmamos disponibilidade em até 24 horas úteis.
      </p>
    </form>
  );
}
