import { CreateGenreDto, UpdateGenreDto } from '@ibook/event-dto';
import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GenreService } from './genre.service';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @MessagePattern('createGenre')
  create(@Payload() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @MessagePattern('findAllGenre')
  findAll() {
    return this.genreService.findAll();
  }

  @MessagePattern('findOneGenre')
  findOne(@Payload() id: number) {
    return this.genreService.findOne(id);
  }

  @MessagePattern('updateGenre')
  update(@Payload() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(updateGenreDto.id, updateGenreDto);
  }

  @MessagePattern('removeGenre')
  remove(@Payload() id: number) {
    return this.genreService.remove(id);
  }
}
