import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Placa {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('varchar',{
        default: 'Sin asignar',
        unique: true,
        nullable: false,
    })
    placa: string;
    @Column('varchar', {
        default: 'Sin asignar',
        nullable: false,
    })
    marca: string;
    @Column('varchar', {
        default: 'Sin asignar',
        nullable: false,
    })
    modelo: string;
    
    @Column('varchar', {
        default: 'Sin asignar',
        nullable: false,
    })
    color: string;
    @Column('timestamp', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    fecha_ingreso: Date;

}