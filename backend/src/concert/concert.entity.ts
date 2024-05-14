import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Concert {
    @PrimaryGeneratedColumn()
    concert_id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    seat: number;
}