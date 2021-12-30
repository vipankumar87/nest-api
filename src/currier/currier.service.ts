import { Injectable } from '@nestjs/common';
import { CreateCurrierDto } from './dto/create-currier.dto';
import { UpdateCurrierDto } from './dto/update-currier.dto';

@Injectable()
export class CurrierService {
  create(createCurrierDto: CreateCurrierDto) {
    return 'This action adds a new currier';
  }

  findAll() {
    return `This action returns all currier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} currier`;
  }

  update(id: number, updateCurrierDto: UpdateCurrierDto) {
    return `This action updates a #${id} currier`;
  }

  remove(id: number) {
    return `This action removes a #${id} currier`;
  }
}
