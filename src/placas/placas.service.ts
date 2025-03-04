import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Placa } from './entities/placa.entity';
import { CreatePlacaDto } from './dto/create-placa.dto';

@Injectable()
export class PlacasService {
    constructor(
        @InjectRepository(Placa)
        private placaRepository: Repository<Placa>,
    ) {

    }
    async create(createPlacaDto: CreatePlacaDto): Promise<Placa> {
        const placa = this.placaRepository.create(createPlacaDto);
        return this.placaRepository.save(placa);
    }

    async findAll(): Promise<Placa[]> {
        return this.placaRepository.find({
            order: {
                fecha_ingreso: 'DESC',
            },
        });
    }

    async findOne(placa: string): Promise<Placa> {
        const found = await this.placaRepository.findOne({where: {placa}});
        if (!found) {
            throw new Error(`Placa ${placa} not found`);
        }
        return found;
    }

    async remove(placa: string) {
        const result = await this.placaRepository.delete({placa});
        if (result.affected === 0) {
            throw new NotFoundException(`Placa ${placa} no encontrada`);
        }
    }

}