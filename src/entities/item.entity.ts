import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    todo: string;

    @Column({ type: 'boolean', default: false })
    done: boolean;
}
