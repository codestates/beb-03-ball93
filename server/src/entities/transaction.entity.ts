import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
class attributes {
  @Field(() => String)
  key: string;
  @Prop()
  @Field(() => String)
  value: string;
  @Prop()
  @Field(() => Boolean)
  index: boolean;
}
@ObjectType()
export class Transaction {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => String)
  type: string;
  @Prop()
  @Field(() => attributes)
  attributes: attributes;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
