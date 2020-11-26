// import {} from 'class-validator'
import { User } from '../../entities/user.entity';

export class LoginResultDTO {
    access_token!: string

    user!: User

}
