import { UpdateGenreInput } from './dto/update-genre.input';
import { CreateGenreInput } from './dto/create-genre.input';
import { CreateGenreDto, UpdateGenreDto } from '@ibook/event-dto';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GENRE_CLIENT } from '../common/constant/service.constant';

@Injectable()
export class GenreService {
  private readonly logger = new Logger(GenreService.name);
  constructor(
    @Inject(GENRE_CLIENT)
    private readonly genreClient: ClientProxy
  ) {}
  create(createGenreInput: CreateGenreInput) {
    const dataCreateGenre: CreateGenreDto = {
      ...createGenreInput,
      author: 1,
    };
    const data = this.genreClient.send('createGenre', dataCreateGenre);
    return data;
  }

  findAll() {
    return this.genreClient.send('findAllGenre', {});
  }

  findOne(id: number) {
    return this.genreClient.send('findOneGenre', {
      id,
    });
  }

  update(id: number, updateGenreInput: UpdateGenreInput) {
    const dataUpdateGenre: UpdateGenreDto = {
      ...updateGenreInput,
      author: 1,
    };
    return this.genreClient.send('updateGenre', {
      id,
      ...dataUpdateGenre,
    });
  }

  remove(id: number) {
    return this.genreClient.send('deleteGenre', { id });
  }
}
