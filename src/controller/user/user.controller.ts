import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { User } from '../../entities/user.entity';
import { CreateUserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUserlist(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    async signup(@Body() createUserDTO: CreateUserDTO): Promise<any> {
        console.log('poe');
        return this.userService.addUser(createUserDTO);
    }

    // @Get(':id')
    // async signUp(@Param('id') id: string): Promise<User> {
    //     return await this.userService.find(Number(id));
    // }
}
