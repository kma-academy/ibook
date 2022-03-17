import { CreateGenreDto, UpdateGenreDto } from '@ibook/event-dto';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>
  ) {}
  create(createGenreDto: CreateGenreDto) {
    const { author, ...dataToCreate } = createGenreDto;
    return this.genreRepository.save({
      ...dataToCreate,
      createBy: author,
    });
  }

  findAll() {
    return this.genreRepository.find({});
  }

  findOne(id: number) {
    return this.genreRepository.findOne(id);
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    const genreData = this.genreRepository.findOne(id);
    if (!genreData) throw new RpcException('Genre not found.');
    const updatedGenre = await this.genreRepository.save({
      id,
      ...genreData,
      ...updateGenreDto,
    });
    return updatedGenre;
  }

  async remove(id: number) {
    const genreData = this.genreRepository.findOne(id);
    if (!genreData) throw new RpcException('Genre not found.');
    await this.genreRepository.softDelete(id);
    return genreData;
  }
}
