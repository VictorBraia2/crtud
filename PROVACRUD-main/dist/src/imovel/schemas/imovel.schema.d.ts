import { Schema, Document } from 'mongoose';
export interface Imovel {
    endereco: string;
    tamanho: number;
    preco: number;
}
export type ImovelDocument = Imovel & Document;
export declare const ImovelSchema: Schema<ImovelDocument, import("mongoose").Model<ImovelDocument, any, any, any, Document<unknown, any, ImovelDocument> & Imovel & Document<unknown, any, any> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ImovelDocument, Document<unknown, {}, import("mongoose").FlatRecord<ImovelDocument>> & import("mongoose").FlatRecord<ImovelDocument> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
