import { PartialType } from '@nestjs/mapped-types';
import { CreatePlacaDto } from './create-placa.dto';

export class UpdatePlacaDto extends PartialType(CreatePlacaDto) {}