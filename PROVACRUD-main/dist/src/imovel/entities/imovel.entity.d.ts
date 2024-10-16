import { Comodo } from './comodo.entity';
export declare class Imovel {
    id: Text;
    descricao: Text;
    dataCompra: Date;
    endereco: string;
    comodos: Comodo[];
}
