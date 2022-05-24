import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hash, HashSchema } from 'src/entities/hash.entity';
import { Transaction, TransactionSchema } from 'src/entities/transaction.entity';
import { GetData } from 'src/get-data/get_data';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: Transaction.name,
        schema: TransactionSchema,
      },
      {
        name: Hash.name,
        schema: HashSchema,
      }
    ]),
  ],
  providers: [TransactionsResolver, TransactionsService],
})
export class TransantionsModule {}
