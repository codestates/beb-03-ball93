import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema} from 'mongoose'

@Schema()
@ObjectType()

export class Hash {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;
    @Prop()

    @Field(() => String)
    hash: string;
}

export const HashSchema = SchemaFactory.createForClass(Hash)