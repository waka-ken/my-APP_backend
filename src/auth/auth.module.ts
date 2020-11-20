import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminModule } from '../admin/admin.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [AdminModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
