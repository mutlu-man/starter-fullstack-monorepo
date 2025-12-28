import { z } from 'zod';
import { RegisterSchema } from '@shared/schemas/auth';

export type RegisterDto = z.infer<typeof RegisterSchema>;