import {
    IsNotEmpty,
    IsString,
    IsOptional,
    isNotEmpty,
    IsBoolean,
    IsNumber,
} from 'class-validator';
import { PrimaryColumn, PrimaryGeneratedColumn, Column } from 'typeorm';

export class CreateItemDTO {
    // @PrimaryGeneratedColumn()
    // id!: number;

    @IsString()
    todo!: string;

    @IsBoolean()
    done!: boolean;
}

export class DeleteItemDTO {}
