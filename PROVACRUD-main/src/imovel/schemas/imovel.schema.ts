import { Schema, Document } from 'mongoose';

export interface Imovel {
  endereco: string;
  tamanho: number;
  preco: number;
}

export type ImovelDocument = Imovel & Document;

export const ImovelSchema = new Schema<ImovelDocument>({
  endereco: { type: String, required: true },
  tamanho: { type: Number, required: true },
  preco: { type: Number, required: true },
});
