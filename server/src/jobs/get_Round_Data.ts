import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Cron } from '@nestjs/schedule';

export class GetRoundData {
  @Cron('10 9 23 * * *', { name: 'GetRoundData' })
  async handleCron(): Promise<any> {
    const contractAddress: string = process.env.CONTRACT_ADDRESS;
    let winner: any;
    let get_jackpot: any;
    let count_ticket: any;
    let count_user: any;
    let jackpot_balance: any;
    let jackpot_count: any;

    // CosmWasmClient.connet에 rpc가 들어가 있어야함
    const cosmClient = CosmWasmClient.connect(
      'https://rpc.torii-1.archway.tech:443',
    );

    // Get Winner
    const qeury_msg1: Record<string, unknown> = {
      winner: {
        lottery_id: 1,
      },
    };
    try {
      winner = await (
        await cosmClient
      ).queryContractSmart(contractAddress, qeury_msg1);
    } catch (err) {
      console.log(err);
    }

    // Get Jackpot Number
    const qeury_msg2: Record<string, unknown> = {
      get_jackpot: {
        lottery_id: 1,
      },
    };
    try {
      get_jackpot = await (
        await cosmClient
      ).queryContractSmart(contractAddress, qeury_msg2);
    } catch (err) {
      console.log(err);
    }

    // Get Count Ticket
    const qeury_msg3: Record<string, unknown> = {
      count_ticket: {
        lottery_id: 1,
      },
    };
    try {
      count_ticket = await (
        await cosmClient
      ).queryContractSmart(contractAddress, qeury_msg3);
    } catch (err) {
      console.log(err);
    }

    // Get Count User
    const qeury_msg4: Record<string, unknown> = {
      count_user: {
        lottery_id: 1,
      },
    };
    try {
      count_user = await (
        await cosmClient
      ).queryContractSmart(contractAddress, qeury_msg4);
    } catch (err) {
      console.log(err);
    }

    // Get Jackpot Balance
    const qeury_msg5: Record<string, unknown> = {
      jackpot_balance: {
        lottery_id: 1,
      },
    };
    try {
      jackpot_balance = await (
        await cosmClient
      ).queryContractSmart(contractAddress, qeury_msg5);
    } catch (err) {
      console.log(err);
    }

    // Get Jackpot Count
    const qeury_msg6: Record<string, unknown> = {
      jackpot_count: {
        lottery_id: 1,
      },
    };
    try {
      jackpot_count = await (
        await cosmClient
      ).queryContractSmart(contractAddress, qeury_msg6);
    } catch (err) {
      console.log(err);
    }

    console.log(
      winner,
      get_jackpot,
      count_ticket,
      count_user,
      jackpot_balance,
      jackpot_count,
    );
  }
}
