import { z } from 'zod';

export const TIPOS_USO = ['video', 'podcast', 'mentoria', 'reuniao', 'outro'] as const;
export const TURNOS = ['manha', 'tarde', 'noite'] as const;

export const reservaSalaSchema = z.object({
  nome: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().min(10, 'WhatsApp obrigatório'),
  instagram: z.string().optional(),
  // Zod v4: spread readonly tuple para array mutável
  tipoUso: z.enum([...TIPOS_USO], { message: 'Selecione o tipo de uso' }),
  dataDesejada: z.string().min(1, 'Data desejada obrigatória'),
  turno: z.enum([...TURNOS], { message: 'Selecione o turno' }),
  equipamento: z.string().optional(),
  informacoesAdicionais: z.string().optional(),
  consentimento: z.literal(true, { message: 'Você precisa aceitar os termos para enviar' }),
});

export type ReservaSalaInput = z.infer<typeof reservaSalaSchema>;
