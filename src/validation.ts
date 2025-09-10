// Importa zod para validação de dados
import { z } from "zod";

// Schema de validação para o formulário de data de nascimento
export const schema = z.object({
  day: z.number().min(1, { message: "Deve ser um dia válido" }).max(31, { message: "Deve ser um dia válido" }),
  month: z.number().min(1, { message: "Deve ser um mês válido" }).max(12, { message: "Deve ser um mês válido" }),
  year: z
    .number()
    .min(1900, { message: "Deve ser no passado" })
    .max(new Date().getFullYear(), { message: "Deve ser no passado" }),
});

// Tipo dos valores do formulário, inferido do schema
export type FormValues = z.infer<typeof schema>;
