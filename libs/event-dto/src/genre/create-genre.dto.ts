import { IsNumber, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNumber()
  author: number;

  @IsString()
  name: string;

  description?: string;
}
