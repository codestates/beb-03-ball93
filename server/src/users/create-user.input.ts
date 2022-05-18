import { InputType, Field, Float } from '@nestjs/graphql';
// Create User Schema
@InputType()
export class CreateUserInput {
  @Field(() => String, {
    description: 'User Avator',
    defaultValue:
      'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
  })
  avator: string;
  @Field(() => String, { description: 'User NickName' })
  nickname: string;

  @Field(() => String, { description: 'User Wallet Address' })
  address: string;

  @Field(() => Float)
  ltbalance: number;

  @Field(() => Float)
  stakedtokenbalance: number;

  @Field(() => String, { description: 'role of the user' })
  role: string;
}
