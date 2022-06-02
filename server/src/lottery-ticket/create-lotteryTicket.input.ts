import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateRank {
  @Field(() => String, { description: '1등' })
  first: string;
  @Field(() => String, { description: '2등' })
  second: string;
  @Field(() => String, { description: '3등' })
  third: string;
  @Field(() => String, { description: '4등' })
  fourth: string;
  @Field(() => String, { description: '5등' })
  fifth: string;
}

@InputType()
export class CreateLotteryTicketInput {
  @Field(() => String, { description: '유저 ID' })
  userId: string;
  @Field(() => String, { description: '지갑 주소' })
  walletAddress: string;
  @Field(() => Number, { description: 'Ticket ID' })
  ticketId: number;
  @Field(() => Number, { description: 'Round ID' })
  roundId: number;
  @Field(() => [String], { description: '구매한 로또 번호들' })
  number: string[];
  @Field(() => [CreateRank], { description: '등수들' })
  rank: CreateRank[];
  @Field(() => Boolean, { description: '지급 확인' })
  paid: boolean;
}
