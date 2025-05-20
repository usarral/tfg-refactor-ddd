import { RequestCategoriaGetcategoriasr } from './dto/request-categoria-getcategoriasr.dto';
import { ResponseCategoriaGetcategoriasr } from './dto/response-categoria-getcategoriasr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class CategoriaGetcategoriasr implements UseCase {
  constructor() {}

  async execute(request: RequestCategoriaGetcategoriasr): Promise<ResponseCategoriaGetcategoriasr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}