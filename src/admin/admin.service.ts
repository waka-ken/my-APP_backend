import { Injectable } from '@nestjs/common';

export type Admin = any;

@Injectable()
export class AdminService {
    private readonly admins: Admin[];

    constructor() {
        this.admins = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];
    }

    async findOne(username: string): Promise<Admin | undefined> {
        return this.admins.find(admin => admin.username === username);
    }
}
