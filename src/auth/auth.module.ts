import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminModule } from '../admin/admin.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constents';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/module/user/user.module';

@Module({
    imports: [
        AdminModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
        UserModule,
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
