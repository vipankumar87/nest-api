import { Injectable } from '@nestjs/common';
import { CreateCurrierTypeDto } from './dto/create-currier-type.dto';
import { UpdateCurrierTypeDto } from './dto/update-currier-type.dto';

@Injectable()
export class CurrierTypeService {
  create(createCurrierTypeDto: CreateCurrierTypeDto) {
    return 'This action adds a new currierType';
  }

  findAll() {
    return `This action returns all currierType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} currierType`;
  }

  update(id: number, updateCurrierTypeDto: UpdateCurrierTypeDto) {
    return `This action updates a #${id} currierType`;
  }

  remove(id: number) {
    return `This action removes a #${id} currierType`;
  }
}
