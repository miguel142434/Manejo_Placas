import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacasModule } from './placas/placas.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [PlacasModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useFactory: ()=> ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        autoLoadEntities: true,
        synchronize: true, 
      }),
    }),
    PlacasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}