import { RequestCategoriaGetcategoriar } from './dto/request-categoria-getcategoriar.dto';
import { ResponseCategoriaGetcategoriar } from './dto/response-categoria-getcategoriar.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class CategoriaGetcategoriar implements UseCase {
  constructor() {}

  async execute(request: RequestCategoriaGetcategoriar): Promise<ResponseCategoriaGetcategoriar | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}