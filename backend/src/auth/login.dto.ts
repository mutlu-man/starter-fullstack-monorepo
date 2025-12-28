import { z } from "zod";
import { LoginSchema } from '@shared/schemas/auth';

export type LoginDto = z.infer<typeof LoginSchema>;
