import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrierDto } from './create-currier.dto';

export class UpdateCurrierDto extends PartialType(CreateCurrierDto) {}
