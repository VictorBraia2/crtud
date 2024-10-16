import { ImovelService } from './imovel.service';
import { CreateImovelDto } from './dto/create-imovel.dto';
export declare class ImovelController {
    private readonly imovelService;
    constructor(imovelService: ImovelService);
    create(createImovelDto: CreateImovelDto): Promise<import("./schemas/imovel.schema").ImovelDocument>;
    findAll(): Promise<import("./schemas/imovel.schema").ImovelDocument[]>;
    findOne(id: string): Promise<import("./schemas/imovel.schema").ImovelDocument>;
    update(id: string, createImovelDto: CreateImovelDto): Promise<import("./schemas/imovel.schema").ImovelDocument>;
    remove(id: string): Promise<void>;
}
