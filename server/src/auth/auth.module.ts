import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'kHPutYbdrFC6u6AFP1eKImE30qN78Bu2',
      signOptions: { expiresIn: '60m' }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
