import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreResolver } from './genre.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GENRE_CLIENT } from '../common/constant/service.constant';

@Module({
  providers: [GenreResolver, GenreService],
  imports: [
    ClientsModule.register([
      {
        name: GENRE_CLIENT,
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
})
export class GenreModule {}
