import { Module } from '@nestjs/common';
import { CurrierService } from './currier.service';
import { CurrierController } from './currier.controller';

@Module({
  controllers: [CurrierController],
  providers: [CurrierService]
})
export class CurrierModule {}
