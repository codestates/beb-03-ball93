import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LotteryTicket,
  LotteryTicketSchema,
} from 'src/entities/lottery_Ticket.entity';
import { LotteryTicketResolver } from './lottery-ticket.resolver';
import { LotteryTicketService } from './lottery-ticket.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LotteryTicket.name,
        schema: LotteryTicketSchema,
      },
    ]),
  ],
  providers: [LotteryTicketResolver, LotteryTicketService],
})
export class LotteryTicketModule {}
