import { z } from 'zod';

export const RegisterSchema = z.object({
    email: z.email('Ungültige E-Mail'),
    password: z.string().min(6, 'Passwort muss mindestens 6 Zeichen haben'),
});

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string(),
});