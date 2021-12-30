import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrierUnitDto } from './create-currier-unit.dto';

export class UpdateCurrierUnitDto extends PartialType(CreateCurrierUnitDto) {}
