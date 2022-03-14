import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field({ defaultValue: 'Harem' })
  name: string;

  @Field({ nullable: true, defaultValue: '' })
  description: string;
}
