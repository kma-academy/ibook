import { FeatureGenreValidateSchema } from '@ibook/env-validator';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from '../genre/entities/genre.entity';
import { GenreModule } from '../genre/genre.module';

@Module({
  imports: [
    GenreModule,
    ConfigModule.forRoot({
      validationSchema: FeatureGenreValidateSchema,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get('DATABASE_HOST'),
          port: +config.get('DATABASE_PORT'),
          username: config.get('DATABASE_USERNAME'),
          password: config.get('DATABASE_PASSWORD'),
          database: config.get('DATABASE_NAME'),
          entities: [Genre],
          synchronize: true,
        };
      },
      imports: [ConfigModule],
    }),
  ],
})
export class AppModule {}
