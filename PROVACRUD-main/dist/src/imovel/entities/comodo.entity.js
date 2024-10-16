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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comodo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const imovel_entity_1 = require("./imovel.entity");
let Comodo = class Comodo {
};
exports.Comodo = Comodo;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Comodo.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Comodo.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)((imovel) => imovel.comodos),
    __metadata("design:type", imovel_entity_1.Imovel)
], Comodo.prototype, "imovel", void 0);
exports.Comodo = Comodo = __decorate([
    (0, mongoose_1.Schema)()
], Comodo);
//# sourceMappingURL=comodo.entity.js.map