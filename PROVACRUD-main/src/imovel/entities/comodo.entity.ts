import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Imovel } from './imovel.entity';
@Schema()
export class Comodo {
  @Prop()
  id: number;
  @Prop()
  nome: string;
  @Prop((imovel) => imovel.comodos)
  imovel: Imovel;
}