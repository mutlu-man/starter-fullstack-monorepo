import z from "zod";
import { apiFetch } from "./api";
import { LoginSchema, RegisterSchema } from '@shared/schemas/auth';
import { removeToken, saveToken } from "./authStorage";


type LoginDto = z.infer<typeof LoginSchema>;
type RegisterDto = z.infer<typeof RegisterSchema>;

export async function login(data: LoginDto) {
    const res = await apiFetch<{ token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
    });

    await saveToken(res.token);
    return res;
}

export async function register(data: RegisterDto) {
    return apiFetch<{ email: string }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

export async function logout() {
    await removeToken();
}