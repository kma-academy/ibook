import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => Int)
  createBy: number;

  @Field(() => Date)
  updateAt: Date;
}
