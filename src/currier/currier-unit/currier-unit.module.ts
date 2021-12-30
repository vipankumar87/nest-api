import { Module } from '@nestjs/common';
import { CurrierUnitService } from './currier-unit.service';
import { CurrierUnitController } from './currier-unit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrierUnit, CurrierUnitSchema } from './entities/currier-unit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CurrierUnit.name, schema: CurrierUnitSchema },
    ]),
  ],
  controllers: [CurrierUnitController],
  providers: [CurrierUnitService],
})
export class CurrierUnitModule {}
