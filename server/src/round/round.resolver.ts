import { Args, Query, Resolver } from '@nestjs/graphql';
import { Round } from 'src/entities/round.entity';
import { RoundService } from './round.service';

@Resolver(() => Round)
export class RoundResolver {
    constructor(private readonly roundService : RoundService) {}

    @Query(() => [Round], { name: 'rounds'})
    findAll() {
        return this.roundService.findAll();
    }

    @Query(() => Round, { name: 'round'})
    findOne(@Args('round', { type: () => Number}) round: number) {
        return this.roundService.findOne(round)
    }
}
