import { Resolver, Args, Query } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(returns => String)
  async hello(@Args({ name: 'name', type: () => String }) name: string) {
    return `Hello => ${name}`;
  }
  @Query(returns => [CreateCatDto])
  async cats() {
    return this.catsService.findAllCats();
  }
}
