import { InputType, Field} from '@nestjs/graphql';

@InputType()

export class CreateHashInput {
    @Field(() => String)
    hash: string
}