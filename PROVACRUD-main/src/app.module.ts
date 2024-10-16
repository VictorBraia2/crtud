import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImovelModule } from './imovel/imovel.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/imoveis'),
    ImovelModule,
  ],
})
export class AppModule {}
