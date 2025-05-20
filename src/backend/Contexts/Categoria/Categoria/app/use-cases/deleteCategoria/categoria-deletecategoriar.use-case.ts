import { RequestCategoriaDeletecategoriar } from './dto/request-categoria-deletecategoriar.dto';
import { ResponseCategoriaDeletecategoriar } from './dto/response-categoria-deletecategoriar.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class CategoriaDeletecategoriar implements UseCase {
  constructor() {}

  async execute(request: RequestCategoriaDeletecategoriar): Promise<ResponseCategoriaDeletecategoriar | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}