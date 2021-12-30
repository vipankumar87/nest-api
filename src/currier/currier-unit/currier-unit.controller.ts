import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurrierUnitService } from './currier-unit.service';
import { CreateCurrierUnitDto } from './dto/create-currier-unit.dto';
import { UpdateCurrierUnitDto } from './dto/update-currier-unit.dto';

@Controller('currier-unit')
export class CurrierUnitController {
  constructor(private readonly currierUnitService: CurrierUnitService) {}

  @Post()
  create(@Body() createCurrierUnitDto: CreateCurrierUnitDto) {
    return this.currierUnitService.create(createCurrierUnitDto);
  }

  @Get()
  findAll() {
    return this.currierUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currierUnitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrierUnitDto: UpdateCurrierUnitDto) {
    return this.currierUnitService.update(+id, updateCurrierUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currierUnitService.remove(+id);
  }
}
