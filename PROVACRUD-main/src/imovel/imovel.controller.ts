import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ImovelService } from './imovel.service';
import { CreateImovelDto } from './dto/create-imovel.dto';

@Controller('imoveis')
export class ImovelController {
  constructor(private readonly imovelService: ImovelService) {}

  @Post()
  async create(@Body() createImovelDto: CreateImovelDto) {
    return this.imovelService.create(createImovelDto);
  }

  @Get()
  async findAll() {
    return this.imovelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.imovelService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createImovelDto: CreateImovelDto) {
    return this.imovelService.update(id, createImovelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.imovelService.remove(id);
  }
}
