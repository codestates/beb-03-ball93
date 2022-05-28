import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class Round {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => Number, { description: '회차' })
  round: number;
  @Prop()
  @Field(() => String, { description: 'Winner' })
  winner: string;
  @Prop()
  @Field(() => String, { description: '당첨 번호' })
  get_jackpot: string;
  @Prop()
  @Field(() => String, { description: '티켓 구매수' })
  count_ticket: string;
  @Prop()
  @Field(() => String, { description: '티켓 구매 유저수' })
  count_user: string;
  @Prop()
  @Field(() => String, { description: '랭킹별 당첨금액' })
  jackpot_balance: string;
  @Prop()
  @Field(() => String, { description: '랭킹별 당첨자수' })
  jackpot_count: string;
}

export const RoundSchema = SchemaFactory.createForClass(Round);
