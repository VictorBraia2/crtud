import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImovelDocument } from './schemas/imovel.schema';

@Injectable()
export class ImovelService {
  constructor(
    @InjectModel('Imovel') private readonly imovelModel: Model<ImovelDocument>,
  ) {}

  async create(data: any): Promise<ImovelDocument> {
    const novoImovel = new this.imovelModel(data);
    return await novoImovel.save();
  }

  async findAll(): Promise<ImovelDocument[]> {
    return this.imovelModel.find().exec();
  }

  async findOne(id: string): Promise<ImovelDocument> {
    const imovel = await this.imovelModel.findById(id).exec();
    if (!imovel) {
      throw new NotFoundException(`Imóvel com ID ${id} não encontrado.`);
    }
    return imovel;
  }

  async update(id: string, data: any): Promise<ImovelDocument> {
    const imovelAtualizado = await this.imovelModel.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    if (!imovelAtualizado) {
      throw new NotFoundException(`Imóvel com ID ${id} não encontrado para atualização.`);
    }
    return imovelAtualizado;
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.imovelModel.findByIdAndDelete(id).exec();
    if (!resultado) {
      throw new NotFoundException(`Imóvel com ID ${id} não encontrado para remoção.`);
    }
  }
}
