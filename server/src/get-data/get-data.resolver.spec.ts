import { Test, TestingModule } from '@nestjs/testing';
import { GetDataResolver } from './get-data.resolver';

describe('GetDataResolver', () => {
  let resolver: GetDataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetDataResolver],
    }).compile();

    resolver = module.get<GetDataResolver>(GetDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
