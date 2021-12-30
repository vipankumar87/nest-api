import { Test, TestingModule } from '@nestjs/testing';
import { CurrierController } from './currier.controller';
import { CurrierService } from './currier.service';

describe('CurrierController', () => {
  let controller: CurrierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrierController],
      providers: [CurrierService],
    }).compile();

    controller = module.get<CurrierController>(CurrierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
