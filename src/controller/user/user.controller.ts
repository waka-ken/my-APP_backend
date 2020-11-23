import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../../service/user/user.service';
import { User } from '../../entities/user.entity';
import { CreateUserDTO } from 'src/dto/user.dto';
import retryTimes = jest.retryTimes;

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUserlist(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    async signup(@Body() createUserDTO: CreateUserDTO): Promise<any> {
        console.log('poe');
        return this.userService.addUser(createUserDTO);
    }

    @Post('login')
    async login(name: string): Promise<User | undefined> {
        return await this.userService.findOne(name)
    }

    // @Get(':id')
    // async signUp(@Param('id') id: string): Promise<User> {
    //     return await this.userService.find(Number(id));
    // }
}
