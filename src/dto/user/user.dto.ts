import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    name: string;

    @IsEmail()
    email!: string;

    @Column()
    age: number | null;
}

export class loginDTO {
    @IsString()
    name: string;

    @IsString()
    password: string;
}
