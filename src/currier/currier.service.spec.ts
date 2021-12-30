import { Test, TestingModule } from '@nestjs/testing';
import { CurrierService } from './currier.service';

describe('CurrierService', () => {
  let service: CurrierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrierService],
    }).compile();

    service = module.get<CurrierService>(CurrierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
