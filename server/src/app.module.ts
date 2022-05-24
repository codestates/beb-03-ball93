import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { TransantionsModule } from './transactions/transactions.module';
import { GetDataModule } from './get-data/get-data.module';

@Module({
  imports: [CommonModule, UsersModule, TransantionsModule, GetDataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
