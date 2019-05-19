import { Field, ObjectType, ID, Int } from 'type-graphql';

@ObjectType()
export class CreateCatDto {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  breed: string;
}
