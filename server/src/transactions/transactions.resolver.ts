import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Hash } from 'src/entities/hash.entity';
import { CreateHashInput } from './create-hash.input';
import { TransactionsService } from './transactions.service';

@Resolver(() => Hash)
export class TransactionsResolver {
  constructor(private readonly transantionsService: TransactionsService) {}

  @Mutation(() => Hash)
  createHash(@Args('createHash') createHashInput: CreateHashInput) {
    return this.transantionsService.create(createHashInput);
  }
}
