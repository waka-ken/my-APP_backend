import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

export class CreateUserDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    name: string;

    @IsString()
    password: string;

    @Column()
    age: number | null;
}

export class loginDTO {
    @IsString()
    name: string;

    @IsString()
    password: string;
}