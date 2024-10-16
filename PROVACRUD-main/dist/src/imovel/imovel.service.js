"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImovelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ImovelService = class ImovelService {
    constructor(imovelModel) {
        this.imovelModel = imovelModel;
    }
    async create(data) {
        const novoImovel = new this.imovelModel(data);
        return await novoImovel.save();
    }
    async findAll() {
        return this.imovelModel.find().exec();
    }
    async findOne(id) {
        const imovel = await this.imovelModel.findById(id).exec();
        if (!imovel) {
            throw new common_1.NotFoundException(`Imóvel com ID ${id} não encontrado.`);
        }
        return imovel;
    }
    async update(id, data) {
        const imovelAtualizado = await this.imovelModel.findByIdAndUpdate(id, data, {
            new: true,
        }).exec();
        if (!imovelAtualizado) {
            throw new common_1.NotFoundException(`Imóvel com ID ${id} não encontrado para atualização.`);
        }
        return imovelAtualizado;
    }
    async remove(id) {
        const resultado = await this.imovelModel.findByIdAndDelete(id).exec();
        if (!resultado) {
            throw new common_1.NotFoundException(`Imóvel com ID ${id} não encontrado para remoção.`);
        }
    }
};
exports.ImovelService = ImovelService;
exports.ImovelService = ImovelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Imovel')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ImovelService);
//# sourceMappingURL=imovel.service.js.map