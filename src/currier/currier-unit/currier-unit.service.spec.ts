import { Test, TestingModule } from '@nestjs/testing';
import { CurrierUnitService } from './currier-unit.service';

describe('CurrierUnitService', () => {
  let service: CurrierUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrierUnitService],
    }).compile();

    service = module.get<CurrierUnitService>(CurrierUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
