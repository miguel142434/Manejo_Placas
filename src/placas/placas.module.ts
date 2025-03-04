import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';
import { Placa } from './entities/placa.entity';
import { Type } from 'class-transformer';

@Module({  
    controllers: [PlacasController],
    providers: [PlacasService],
    imports: [TypeOrmModule.forFeature([Placa])],
    exports: [PlacasService],
})

export class PlacasModule {}