import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
    constructor(private adminService: AdminService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.adminService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
