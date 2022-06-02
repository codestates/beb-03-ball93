import { CreateLotteryTicketInput } from './create-lotteryTicket.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class updateLotteryTicketInput extends PartialType(
  CreateLotteryTicketInput,
) {
  @Field(() => String)
  walletAddress: string;
}
