import { Comodo } from 'src/imovel/entities/comodo.entity';
import { Model } from 'mongoose';
export declare class ComodoService {
    private comodoModel;
    constructor(comodoModel: Model<Comodo>);
    remove(id: number): Promise<void>;
}
