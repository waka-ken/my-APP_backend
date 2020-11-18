import { Module } from '@nestjs/common';
import { UserController } from '../../controller/user/user.controller';
import { UserService } from '../../service/user/user.service';
import { User } from '../../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
