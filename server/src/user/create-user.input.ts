import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: '유저 ID' })
  userId: string;
  @Field(() => String, { description: '지갑 주소' })
  walletAddress: string;
}
