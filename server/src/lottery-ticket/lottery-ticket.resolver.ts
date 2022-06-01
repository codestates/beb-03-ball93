import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { LotteryTicket } from 'src/entities/lottery_Ticket.entity';
import { CreateLotteryTicketInput } from './create-lotteryTicket.input';
import { LotteryTicketService } from './lottery-ticket.service';
import { updateLotteryTicketInput } from './update-lotteryTicket.input';

@Resolver(() => LotteryTicket)
export class LotteryTicketResolver {
  constructor(private readonly lotteryTicketService: LotteryTicketService) {}

  @Mutation(() => LotteryTicket)
  createLotteryTicket(
    @Args('createTicket') createLotteryTicketInput: CreateLotteryTicketInput,
  ) {
    return this.lotteryTicketService.create(createLotteryTicketInput);
  }

  @Query(() => [LotteryTicket], { name: 'lotteryTickets' })
  findAll() {
    return this.lotteryTicketService.findAll();
  }

  @Query(() => LotteryTicket, { name: 'lotteryTicket' })
  findOne(
    @Args('walletAddress', { type: () => String }) walletAddress: string,
  ) {
    return this.lotteryTicketService.findOne(walletAddress);
  }

  @Mutation(() => LotteryTicket)
  updateLotteryTicket(
    @Args('updateTicket') updateLotteryTicketInput: updateLotteryTicketInput,
  ) {
    return this.lotteryTicketService.update(
      updateLotteryTicketInput.walletAddress,
      updateLotteryTicketInput,
    );
  }
}
