import {User} from '../../entities/user.entity';

export class CreateUserResponseDto extends User {
    name!: string

    password!: string

    age!: number

    constructor(partial: Partial<CreateUserResponseDto>) {
        super(partial);
    }
}