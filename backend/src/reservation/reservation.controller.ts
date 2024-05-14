import { Controller, Post, Delete, Param, Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) { }

    @Post()
    async createReservation(@Body() data: { user_id: number, concert_id: number }) {
        const { user_id, concert_id } = data;
        return this.reservationService.createReservation(user_id, concert_id);
    }

    @Delete(':user_id/:concert_id')
    async deleteReservation(
        @Param('user_id') user_id: string,
        @Param('concert_id') concert_id: string
    ): Promise<void> {
        await this.reservationService.deleteReservation(parseInt(user_id), parseInt(concert_id));
    }
}