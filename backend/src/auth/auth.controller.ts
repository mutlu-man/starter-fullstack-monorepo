import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterSchema } from '../../../shared/schemas/auth';
import { LoginSchema } from '../../../shared/schemas/auth';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() body: unknown) {
        const parsed = RegisterSchema.parse(body);
        return this.authService.register(parsed);
    }

    @Post('login')
    async login(@Body() body: unknown) {
        const parsed = LoginSchema.parse(body);
        return this.authService.login(parsed);
    }
}
