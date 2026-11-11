import { z } from 'zod'

export const coverageSchema = z.object({
  city: z.string().min(1, 'Escolha uma cidade.'),
  address: z.string().trim().min(2, 'Informe sua rua ou bairro.'),
})

export const leadSchema = z.object({
  name: z.string().trim().min(2, 'Digite seu nome.'),
  phone: z.string().trim().min(8, 'Digite um WhatsApp válido.'),
  city: z.string().min(1, 'Escolha uma cidade.'),
  message: z.string().trim().min(5, 'Conte brevemente como podemos ajudar.'),
  website: z.string().max(0, 'Não foi possível validar o formulário.'),
  consent: z.boolean().refine((value) => value, 'Aceite o contato para continuar.'),
})

export type LeadInput = z.infer<typeof leadSchema>
