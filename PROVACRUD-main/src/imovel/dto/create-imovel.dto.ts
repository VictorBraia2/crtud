import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateImovelDto {
  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsNumber()
  tamanho: number;

  @IsNumber()
  preco: number;
}
