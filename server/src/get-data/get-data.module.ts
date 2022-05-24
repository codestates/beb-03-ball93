import { Module } from '@nestjs/common';
import { GetDataResolver } from './get-data.resolver';
import { ScheduleModule } from '@nestjs/schedule';
import { CosmWasmClient} from '@cosmjs/cosmwasm-stargate';
import { GetDataService } from './get-data.service';
import { GetData } from './get_data';

@Module({
  imports: [ScheduleModule.forRoot(), GetData],
  providers: [GetDataService, GetDataResolver, GetData],
})
export class GetDataModule {}
