import { Controller, UseGuards, Post, Req, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
// import { Req } from 'express';
import { User } from './entities/user.entity';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { LoginResultDTO } from './auth/dto/login-Result.dto';

@Controller('auth')
export class AppController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@Req() req){
        console.log(req)
        return this.authService.login(req.body as User)
    }

    // @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }
    // constructor(private readonly appService: AppService) {}

    // @Get()
    // getProfile(): any {
    //     return this.appService.getProfile();
    // }
}
