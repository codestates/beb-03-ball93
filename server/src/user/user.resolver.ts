import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('user') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('walletAddress', { type: () => String }) walletAddress: string,
  ) {
    return this.userService.findOne(walletAddress);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(
      updateUserInput.walletAddress,
      updateUserInput,
    );
  }

  @Mutation(() => User)
  removeUser(
    @Args('walletAddress', { type: () => String }) walletAddress: string,
  ) {
    return this.userService.remove(walletAddress);
  }
}
