import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Injectable } from '@nestjs/common';
import { GetData } from './get_data';

@Injectable()
export class GetDataService {
  constructor(private getData: GetData) {}

  getTransactionData() {
    return this.getData.handleCron();
  }
}
