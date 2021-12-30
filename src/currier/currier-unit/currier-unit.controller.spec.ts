import { Test, TestingModule } from '@nestjs/testing';
import { CurrierUnitController } from './currier-unit.controller';
import { CurrierUnitService } from './currier-unit.service';

describe('CurrierUnitController', () => {
  let controller: CurrierUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrierUnitController],
      providers: [CurrierUnitService],
    }).compile();

    controller = module.get<CurrierUnitController>(CurrierUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
