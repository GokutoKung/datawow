import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    history_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @Column()
    user_id: number;

    @Column()
    concert_id: number;

    @Column({
        type: 'enum',
        enum: ['Reserve', 'Cancel'],
        default: 'Reserve'
    })
    action: string;
}