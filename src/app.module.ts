import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './module/item/item.module';
import { UserModule } from './module/user/user.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AdminService } from './admin/admin.service';
import { Connection } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ItemModule,
        UserModule,
        AdminModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }
}
