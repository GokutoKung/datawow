import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Reservation {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    concert_id: number;
}