import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User Avator' })
  avator: string;

  @Field(() => String, { description: 'User NickName' })
  nickname: string;

  @Field(() => String, { description: 'User Wallet Address' })
  address: string;

  @Field(() => String, { description: 'role of the user' })
  role: string;
}
