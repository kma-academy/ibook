import {
  DatabaseSQLValidateSchema,
  FeatureGenreValidateSchema,
} from '@ibook/env-validator';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GenreModule } from '../genre/genre.module';

@Module({
  imports: [
    GenreModule,
    ConfigModule.forRoot({
      validationSchema: FeatureGenreValidateSchema,
    }),
  ],
})
export class AppModule {}
