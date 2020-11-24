import { Injectable } from '@nestjs/common';
// import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../service/user/user.service';
import { User } from '../entities/user.entity';
import bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        // private adminsService: AdminService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(name: string, pass: string): Promise<any> {
        const user: User = await this.userService.findOne(name);
        console.log('user', user);
        if (user && bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
    }

    // async validateUser(username: string, pass: string): Promise<any> {
    //     const user = await this.adminsService.findOne(username);
    //     if (user && user.password === pass) {
    //         const { password, ...result } = user;
    //         return result;
    //     }
    //     return null;
    // }

    async login(user: User) {
        const payload = { name: user.name, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
