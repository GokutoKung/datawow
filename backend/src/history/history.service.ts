import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './history.entity';

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(History)
        private historyRepository: Repository<History>,
    ) { }

    async createHistory(user_id: number, concert_id: number, action: string): Promise<History> {
        const history = this.historyRepository.create({ user_id, concert_id, action });
        return this.historyRepository.save(history);
    }

    async findAll(): Promise<History[]> {
        return this.historyRepository.find();
    }
}