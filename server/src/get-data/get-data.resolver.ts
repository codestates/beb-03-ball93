import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Hash } from 'src/entities/hash.entity';
import { GetDataService } from './get-data.service';

@Resolver(() => Hash)
export class GetDataResolver {
  constructor(private readonly getDataService: GetDataService) {}
}
