import { IsNumber, IsString, MinLength } from "class-validator";

export class CreatePlacaDto {
    @IsString()
    @MinLength(6)
    readonly placa: string;
    @IsString()
    @MinLength(3)
    readonly marca: string;
    @IsString()
    @MinLength(3)
    readonly modelo: string;
    @IsString()
    @MinLength(3)
    readonly color: string;
    @IsString()
    fecha_ingreso: Date;
}