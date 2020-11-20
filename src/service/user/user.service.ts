import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async addUser(acount: CreateUserDTO): Promise<InsertResult> {
        // console.log('poepoe')
        return await this.userRepository.insert(acount);
    }
}
