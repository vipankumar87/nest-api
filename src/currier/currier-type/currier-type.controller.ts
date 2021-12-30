import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurrierTypeService } from './currier-type.service';
import { CreateCurrierTypeDto } from './dto/create-currier-type.dto';
import { UpdateCurrierTypeDto } from './dto/update-currier-type.dto';

@Controller('currier-type')
export class CurrierTypeController {
  constructor(private readonly currierTypeService: CurrierTypeService) {}

  @Post()
  create(@Body() createCurrierTypeDto: CreateCurrierTypeDto) {
    return this.currierTypeService.create(createCurrierTypeDto);
  }

  @Get()
  findAll() {
    return this.currierTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currierTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrierTypeDto: UpdateCurrierTypeDto) {
    return this.currierTypeService.update(+id, updateCurrierTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currierTypeService.remove(+id);
  }
}
