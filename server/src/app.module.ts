import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { RoundModule } from './round/round.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [CommonModule, RoundModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
