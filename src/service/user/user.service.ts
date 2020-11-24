import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/user.dto';

// export type User = any;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findOne(name: string): Promise<User | undefined> {
        // const test: any = this.userRepository.findOne(name);
        // test.then(val => {
        //     console.log('aaaaa', val);
        // });
        return this.userRepository.findOne({
            where: {
                name,
            },
        });
        // return undefined;
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async addUser(account: CreateUserDTO): Promise<InsertResult> {
        return await this.userRepository.insert(account);
    }
}
