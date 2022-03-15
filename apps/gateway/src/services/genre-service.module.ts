import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  exports: [
    ClientsModule.register([
      {
        name: 'GENRE_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: process.env.TRANSPORT_URL,
        },
      },
    ]),
  ],
})
export class GenreClientModule {}
