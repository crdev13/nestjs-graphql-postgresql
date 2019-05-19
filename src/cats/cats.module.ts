import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';
import { CatsResolver } from './cats.resolver';
@Module({
  imports: [DatabaseModule],
  providers: [CatsService, CatsResolver, ...catsProviders],
})
export class CatsModule {}
