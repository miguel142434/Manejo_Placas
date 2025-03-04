import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { PlacasService } from './placas.service';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { Placa } from './entities/placa.entity';

@Controller('placas')
export class PlacasController {
    constructor(private readonly placasService: PlacasService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPlacaDto: CreatePlacaDto): Promise<Placa> {
        return this.placasService.create(createPlacaDto);
    }

    @Get()
    findAll(): Promise<Placa[]> {
        return this.placasService.findAll();
    }

    @Get(':placa')
    findOne(@Param('placa') placa: string): Promise<Placa> {
        return this.placasService.findOne(placa);
    }

    @Delete(':placa')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('placa') placa: string): Promise<void> {
        return this.placasService.remove(placa);
    }
}

