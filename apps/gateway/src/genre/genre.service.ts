import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { GENRE_CLIENT } from '../common/constant/service.constant';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  private readonly logger = new Logger(GenreService.name);
  constructor(
    @Inject(GENRE_CLIENT)
    private readonly genreClient: ClientProxy
  ) {}
  create(createGenreInput: CreateGenreInput) {
    const data = this.genreClient.send('createGenre', createGenreInput);
    data.subscribe({
      next: (x) => this.logger.log(x),
    });
    return data;
  }

  findAll() {
    return `This action returns all genre`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genre`;
  }

  update(id: number, updateGenreInput: UpdateGenreInput) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
