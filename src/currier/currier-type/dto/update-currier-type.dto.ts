import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrierTypeDto } from './create-currier-type.dto';

export class UpdateCurrierTypeDto extends PartialType(CreateCurrierTypeDto) {}
