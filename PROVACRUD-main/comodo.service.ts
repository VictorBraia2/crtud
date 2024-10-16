import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comodo } from 'src/imovel/entities/comodo.entity';
import { Model } from 'mongoose';

@Injectable()
export class ComodoService {
  constructor(
    @InjectModel('Comodo')
    private comodoModel: Model<Comodo>,
  ) {}

  async remove(id: number): Promise<void> {
    await this.comodoModel.deleteOne({ _id: id });
  }
}