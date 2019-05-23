import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';
import { CatInput } from './inputs/cat.input';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY') private readonly CATS_REPOSITORY: typeof Cat,
  ) {}

  async findAllCats(): Promise<Cat[]> {
    return await this.CATS_REPOSITORY.findAll<Cat>();
  }

  async getCat(id: number): Promise<Cat> {
    return this.CATS_REPOSITORY.findByPk<Cat>(id);
  }

  async createCat(cat: CatInput): Promise<Cat> {
    return await this.CATS_REPOSITORY.create<Cat>(cat);
  }
  async update(cat: CatInput): Promise<Cat> {
    const { name, age, breed, id } = cat;
    const response = await this.CATS_REPOSITORY.update(
      { name, age, breed, id },
      { where: { id }, returning: true },
    );
    const [updated, updatedCat] = response;
    if (!!updated) {
      return updatedCat[0].dataValues as Cat;
    }
    return;
  }
}
