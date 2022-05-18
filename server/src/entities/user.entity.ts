import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Schema as MongooseSchma } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Mongoose 스키마 생성
// User Nomal Schema
@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchma.Types.ObjectId;
  @Prop()
  @Field(() => String, {
    description: 'User Avator',
  })
  avator: string;
  @Prop()
  @Field(() => String, { description: 'User NickName' })
  nickname: string;
  @Prop()
  @Field(() => String, { description: 'User Wallet Address' })
  address: string;
  @Prop()
  @Field(() => Float)
  ltbalance: number;
  @Prop()
  @Field(() => Float)
  stakedtokenbalance: number;
  @Prop()
  @Field(() => String, { description: 'User role' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
