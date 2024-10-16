import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImovelSchema, ImovelDocument } from './schemas/imovel.schema';
import { ImovelController } from './imovel.controller';
import { ImovelService } from './imovel.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Imovel', schema: ImovelSchema }]),
  ],
  controllers: [ImovelController],
  providers: [ImovelService],
})
export class ImovelModule {}
