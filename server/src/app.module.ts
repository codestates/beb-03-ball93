import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { RoundModule } from './round/round.module';
import { AdminModule } from './admin/admin.module';
import { LotteryTicketModule } from './lottery-ticket/lottery-ticket.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CommonModule, RoundModule, AdminModule, LotteryTicketModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
