import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Concert } from './concert.entity';

@Injectable()
export class ConcertService {
    constructor(
        @InjectRepository(Concert)
        private concertsRepository: Repository<Concert>,
    ) { }

    findAll(): Promise<Concert[]> {
        return this.concertsRepository.find();
    }

    create(concert: Concert): Promise<Concert> {
        return this.concertsRepository.save(concert);
    }

    async remove(id: number): Promise<void> {
        await this.concertsRepository.delete(id);
    }
}