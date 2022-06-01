import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LotteryTicket } from 'src/entities/lottery_Ticket.entity';
import { CreateLotteryTicketInput } from './create-lotteryTicket.input';
import { updateLotteryTicketInput } from './update-lotteryTicket.input';

@Injectable()
export class LotteryTicketService {
  constructor(
    @InjectModel(LotteryTicket.name)
    private readonly lotteryTicketModel: Model<LotteryTicket>,
  ) {}

  create(createLotteryTicketInput: CreateLotteryTicketInput) {
    const lottery_Ticket = new this.lotteryTicketModel(
      createLotteryTicketInput,
    );
    return lottery_Ticket.save();
  }

  findAll() {
    return this.lotteryTicketModel.find().exec();
  }

  async findOne(walletAddress: string) {
    const lottery_Ticket = await this.lotteryTicketModel
      .findOne({ walletAddress: walletAddress })
      .exec();

    if (!lottery_Ticket) {
      throw new NotFoundException(`LotteryTicket ${walletAddress} not found`);
    }

    return lottery_Ticket;
  }

  async update(
    walletAddress: string,
    updateLotteryTicket: updateLotteryTicketInput,
  ) {
    const existringLotteryTicket = await this.lotteryTicketModel
      .findOneAndUpdate(
        {
          walletAddress: walletAddress,
        },
        { $set: updateLotteryTicket },
        { new: true },
      )
      .exec();

    if (!existringLotteryTicket) {
      throw new NotFoundException(`LotteryTicket ${walletAddress} not found`);
    }

    return existringLotteryTicket;
  }

  async remove(walletAddress: string) {
    const lottery_Ticket = await this.findOne(walletAddress);
    return lottery_Ticket.remove();
  }
}
