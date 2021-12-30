import { Injectable } from '@nestjs/common';
import { CreateCurrierUnitDto } from './dto/create-currier-unit.dto';
import { UpdateCurrierUnitDto } from './dto/update-currier-unit.dto';

@Injectable()
export class CurrierUnitService {
  create(createCurrierUnitDto: CreateCurrierUnitDto) {
    return 'This action adds a new currierUnit';
  }

  findAll() {
    return `This action returns all currierUnit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} currierUnit`;
  }

  update(id: number, updateCurrierUnitDto: UpdateCurrierUnitDto) {
    return `This action updates a #${id} currierUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} currierUnit`;
  }
}
