import { Controller, Post, Get, Body } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
    constructor(private readonly historyService: HistoryService) { }

    @Post()
    async createHistory(@Body() data: { user_id: number, concert_id: number, action: string }) {
        const { user_id, concert_id, action } = data;
        return this.historyService.createHistory(user_id, concert_id, action);
    }

    @Get()
    async findAll() {
        return this.historyService.findAll();
    }
}