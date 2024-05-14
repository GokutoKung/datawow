import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { Concert } from './concert.entity';

@Controller('concert')
export class ConcertController {
    constructor(private readonly concertsService: ConcertService) { }

    @Get()
    findAll(): Promise<Concert[]> {
        return this.concertsService.findAll();
    }

    @Post()
    create(@Body() concert: Concert): Promise<Concert> {
        return this.concertsService.create(concert);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.concertsService.remove(id);
    }
}