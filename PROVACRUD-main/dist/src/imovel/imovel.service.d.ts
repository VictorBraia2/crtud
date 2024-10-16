import { Model } from 'mongoose';
import { ImovelDocument } from './schemas/imovel.schema';
export declare class ImovelService {
    private readonly imovelModel;
    constructor(imovelModel: Model<ImovelDocument>);
    create(data: any): Promise<ImovelDocument>;
    findAll(): Promise<ImovelDocument[]>;
    findOne(id: string): Promise<ImovelDocument>;
    update(id: string, data: any): Promise<ImovelDocument>;
    remove(id: string): Promise<void>;
}
