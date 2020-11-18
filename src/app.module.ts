import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './module/item/item.module';
import { UserModule } from './module/user/user.module';
import { AdminModule } from './module/admin/admin.module';

@Module({
    imports: [TypeOrmModule.forRoot(), ItemModule, UserModule, AdminModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
