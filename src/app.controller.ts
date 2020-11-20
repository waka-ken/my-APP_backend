import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return req.user;
    }
    // constructor(private readonly appService: AppService) {}

    // @Get()
    // getProfile(): any {
    //     return this.appService.getProfile();
    // }
}
