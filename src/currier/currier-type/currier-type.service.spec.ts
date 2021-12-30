import { Test, TestingModule } from '@nestjs/testing';
import { CurrierTypeService } from './currier-type.service';

describe('CurrierTypeService', () => {
  let service: CurrierTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrierTypeService],
    }).compile();

    service = module.get<CurrierTypeService>(CurrierTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
