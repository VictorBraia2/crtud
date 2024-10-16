import { ComodoService } from './comodo.service';
export declare class ComodoController {
    private readonly comodoService;
    constructor(comodoService: ComodoService);
    remove(id: number): Promise<void>;
}
