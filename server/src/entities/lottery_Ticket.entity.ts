import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Rank } from './rank.model';

@Schema()
@ObjectType()
export class LotteryTicket {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => String, { description: '유저 ID' })
  userId: string;
  @Prop()
  @Field(() => String, { description: '지갑 주소' })
  walletAddress: string;
  @Prop()
  @Field(() => Number, { description: 'Ticket ID' })
  ticketId: number;
  @Prop()
  @Field(() => Number, { description: 'Round ID' })
  roundId: number;
  @Prop()
  @Field(() => [String], { description: '구매한 로또 번호들' })
  number: string[];
  @Prop()
  @Field(() => [Rank], { description: '등수들' })
  rank: Rank[];
  @Prop()
  @Field(() => Boolean, { description: '지급 확인' })
  paid: boolean;
}

export const LotteryTicketSchema = SchemaFactory.createForClass(LotteryTicket);
