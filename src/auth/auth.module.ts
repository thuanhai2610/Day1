import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; 
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { jwtConstants } from './constants';

@Module ({
    imports: [PassportModule, 
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60m'},
        }),
        UsersModule,
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard],
    controllers: [AuthController],

})
export class AuthModule{}