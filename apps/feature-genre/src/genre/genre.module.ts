import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { Genre } from './entities/genre.entity';

@Module({
  controllers: [GenreController],
  providers: [GenreService],
  imports: [TypeOrmModule.forFeature([Genre])],
})
export class GenreModule {}
