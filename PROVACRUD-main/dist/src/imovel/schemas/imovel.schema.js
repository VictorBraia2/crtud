"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImovelSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ImovelSchema = new mongoose_1.Schema({
    endereco: { type: String, required: true },
    tamanho: { type: Number, required: true },
    preco: { type: Number, required: true },
});
//# sourceMappingURL=imovel.schema.js.map