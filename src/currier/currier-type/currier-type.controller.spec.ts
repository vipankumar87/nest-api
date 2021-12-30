import { Test, TestingModule } from '@nestjs/testing';
import { CurrierTypeController } from './currier-type.controller';
import { CurrierTypeService } from './currier-type.service';

describe('CurrierTypeController', () => {
  let controller: CurrierTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrierTypeController],
      providers: [CurrierTypeService],
    }).compile();

    controller = module.get<CurrierTypeController>(CurrierTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
