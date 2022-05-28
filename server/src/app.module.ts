import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { RoundModule } from './round/round.module';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [CommonModule, RoundModule, BalanceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
