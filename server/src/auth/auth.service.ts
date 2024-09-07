import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/users/user.model';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto) {
        const hashedPassword = await bcrypt.hash(registerDto.password, 10)
        const user = await this.userService.create({
            ...registerDto,
            password: hashedPassword
        })
        return this.generateToken(user)
    }

    private generateToken(user: User) {
        const payload = { email: user.email, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async login(loginDto: LoginDto) {
        const user = await this.userService.findByEmail(loginDto.email)
        if (!user) {
            throw new UnauthorizedException('invalid login')
        }
        const isPasswordValid = bcrypt.compare(loginDto.password, user.password)
        if (!isPasswordValid) {
            throw new UnauthorizedException('invalid password')
        }
        return this.generateToken(user)
    }
}
