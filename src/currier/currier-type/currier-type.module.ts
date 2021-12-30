import { Module } from '@nestjs/common';
import { CurrierTypeService } from './currier-type.service';
import { CurrierTypeController } from './currier-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrierType, CurrierTypeSchema } from './entities/currier-type.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CurrierType.name, schema: CurrierTypeSchema },
    ]),
  ],
  controllers: [CurrierTypeController],
  providers: [CurrierTypeService],
})
export class CurrierTypeModule {}
