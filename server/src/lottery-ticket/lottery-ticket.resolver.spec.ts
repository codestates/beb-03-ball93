import { Test, TestingModule } from '@nestjs/testing';
import { LotteryTicketResolver } from './lottery-ticket.resolver';

describe('LotteryTicketResolver', () => {
  let resolver: LotteryTicketResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LotteryTicketResolver],
    }).compile();

    resolver = module.get<LotteryTicketResolver>(LotteryTicketResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
