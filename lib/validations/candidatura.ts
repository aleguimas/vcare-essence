import { z } from 'zod';

export const candidaturaSchema = z.object({
  nome: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().min(10, 'WhatsApp obrigatório'),
  especialidade: z.string().min(2, 'Especialidade obrigatória'),
  registro: z.string().min(4, 'Registro profissional obrigatório (CRP, CRM, CRN...)'),
  abordagem: z.string().optional(),
  anosExperiencia: z.string().optional(),
  linkPerfil: z.string().url('URL inválida').optional().or(z.literal('')),
  motivacao: z
    .string()
    .min(50, 'Conte um pouco mais, mínimo 50 caracteres')
    .max(1000, 'Máximo 1000 caracteres'),
  consentimento: z.literal(true, { message: 'Você precisa aceitar os termos para enviar' }),
});

export type CandidaturaInput = z.infer<typeof candidaturaSchema>;
