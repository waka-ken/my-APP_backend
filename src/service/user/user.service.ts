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
        console.log('poe')
        return this.userRepository.findOne({
            where: {
                name,
            },
        });
        // return  this.userRepository.findOne(user => user.name === name )
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async addUser(createUserDTO: CreateUserDTO): Promise<User> {

        let user = new User({})
        user.name = createUserDTO.name
        // user.email = CreateUserDTO.email
        user.password = ''

        user = await this.userRepository.save(user)

        return user
    }
}
