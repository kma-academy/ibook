import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  exports: [
    ClientsModule.register([
      {
        name: 'GENRE_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
})
export class GenreClientModule {}
