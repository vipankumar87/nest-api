import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurrierService } from './currier.service';
import { CreateCurrierDto } from './dto/create-currier.dto';
import { UpdateCurrierDto } from './dto/update-currier.dto';

@Controller('currier')
export class CurrierController {
  constructor(private readonly currierService: CurrierService) {}

  @Post()
  create(@Body() createCurrierDto: CreateCurrierDto) {
    return this.currierService.create(createCurrierDto);
  }

  @Get()
  findAll() {
    return this.currierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrierDto: UpdateCurrierDto) {
    return this.currierService.update(+id, updateCurrierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currierService.remove(+id);
  }
}
