import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { TransantionsModule } from './transactions/transactions.module';

@Module({
  imports: [CommonModule, UsersModule, TransantionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
