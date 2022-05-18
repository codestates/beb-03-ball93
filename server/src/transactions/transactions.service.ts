import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { Hash } from 'src/entities/hash.entity';
import { Transaction } from 'src/entities/transaction.entity';
import { CreateHashInput } from './create-hash.input';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<Transaction>,
    @InjectModel(Hash.name)
    private readonly hashModel: Model<Hash>,
  ) {}
  private readonly DATA_URL =
    'https://rpc.torii-1.archway.tech/tx?hash=0xF0D02CF50B369BF1F32303E9737431126CCEEE970B8275A4B340EE9F3B816790&prove=true';

  async create(CreateHashInput: CreateHashInput) {
    const Tx = await axios.get(this.DATA_URL);
    const Tx_data = Tx.data.result.tx_result.events;
    const Tx_conver = [...Tx_data]
    const Tx_result = new this.transactionModel(Tx_conver);
    Tx_result.save();
    console.log(Tx_data)
    const Hash = new this.hashModel(CreateHashInput);
    return Hash.save();
  }
}
