import { Test, TestingModule } from '@nestjs/testing';
import { TransantionsResolver } from './transactions.resolver';

describe('TransantionsResolver', () => {
  let resolver: TransantionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransantionsResolver],
    }).compile();

    resolver = module.get<TransantionsResolver>(TransantionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
