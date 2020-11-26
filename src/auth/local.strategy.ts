import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'name',
            passwordField: 'password'
        })
    }

    async validate(name: string, password: string): Promise<any> {
        console.log('poe')
        const user = await this.authService.validateUser(name, password);
        console.log(user)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

    // constructor(private moduleRef: ModuleRef) {
    //     super({
    //         passReqToCallback: true,
    //     });
    // }
}
