import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { RegisterDto } from './register.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { LoginDto } from './login.dto';
import { Model } from 'mongoose';
import { email } from 'zod';

@Injectable()
export class AuthService {
    constructor(
        private userRepo: UserRepository,
        private jwtService: JwtService,) { }

    public async login(loginDto: LoginDto): Promise<{ token: string, email: string }> {
        const user = await this.userRepo.readUser(loginDto.email);
        if (!user) throw new UnauthorizedException('Invalid credentials');

        const passwordMatches = await bcrypt.compare(loginDto.password, user.password);
        if (!passwordMatches) throw new UnauthorizedException('Invalid credentials');

        const payload = { sub: user._id, email: user.email };
        const token = this.jwtService.sign(payload);

        return { token, email: user.email };
    }

    public async register(registerDto: RegisterDto) {
        registerDto.password = await bcrypt.hash(registerDto.password, 10);
        const userExists = await this.userRepo.readUser(registerDto.email);
        if (userExists) {
            throw new Error(`User account already exists`)
        }

        return this.userRepo.createUser(registerDto as UserDocument);
    }
}
