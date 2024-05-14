import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(Reservation)
        private reservationRepository: Repository<Reservation>,
    ) { }

    async createReservation(user_id: number, concert_id: number): Promise<Reservation> {
        const reservation = this.reservationRepository.create({ user_id, concert_id });
        return this.reservationRepository.save(reservation);
    }

    async deleteReservation(user_id: number, concert_id: number): Promise<void> {
        const reservation = await this.reservationRepository.findOne({ where: { user_id, concert_id } });
        if (!reservation) {
            throw new NotFoundException('Reservation not found');
        }
        await this.reservationRepository.remove(reservation);
    }
}
