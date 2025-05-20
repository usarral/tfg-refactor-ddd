import { RequestCategoriaUpdatecategoriar } from './dto/request-categoria-updatecategoriar.dto';
import { ResponseCategoriaUpdatecategoriar } from './dto/response-categoria-updatecategoriar.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class CategoriaUpdatecategoriar implements UseCase {
  constructor() {}

  async execute(request: RequestCategoriaUpdatecategoriar): Promise<ResponseCategoriaUpdatecategoriar | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}