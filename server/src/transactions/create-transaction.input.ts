import { InputType, Field, ObjectType } from "@nestjs/graphql";

// Create Transactions
@InputType('CreateTansactionInput')
export class attributes {
    @Field(() => String)
    key: string;
    @Field(() => String)
    value: string;
    @Field(() => Boolean)
    index: boolean;
}
@InputType()
export class CreateTransactionInput {
    @Field(() => String)
    type: string;
    @Field(() => [attributes])
    attributes: attributes[]
}