import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Comodo } from './comodo.entity';
@Schema()
export class Imovel {
  @Prop({type: 'id'})
  id: Text;
  @Prop({ type: 'text' })
  descricao: Text;
  @Prop({ type: 'date' })
  dataCompra: Date;
  @Prop({ type: 'text' })
  endereco: string;
  comodos: Comodo[]};
