import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => String, { description: '유저 ID' })
  userId: string;
  @Prop()
  @Field(() => String, { description: '지갑 주소' })
  walletAddress: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
