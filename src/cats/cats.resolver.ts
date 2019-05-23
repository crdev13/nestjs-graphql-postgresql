import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.input';
import { Int } from 'type-graphql';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => String)
  async hello(@Args({ name: 'name', type: () => String }) name: string) {
    return `Hello => ${name}`;
  }
  @Query(() => [CreateCatDto])
  async cats() {
    return this.catsService.findAllCats();
  }

  @Query(() => CreateCatDto, { nullable: true })
  async getCat(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.catsService.getCat(id);
  }

  @Mutation(() => CreateCatDto)
  async create(@Args('input') cat: CatInput) {
    return this.catsService.createCat(cat);
  }

  @Mutation(() => CreateCatDto)
  async updateCat(@Args('input') cat: CatInput) {
    return this.catsService.update(cat);
  }
}
