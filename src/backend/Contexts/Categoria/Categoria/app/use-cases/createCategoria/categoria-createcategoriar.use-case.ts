import { RequestCategoriaCreatecategoriar } from './dto/request-categoria-createcategoriar.dto';
import { ResponseCategoriaCreatecategoriar } from './dto/response-categoria-createcategoriar.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class CategoriaCreatecategoriar implements UseCase {
  constructor() {}

  async execute(request: RequestCategoriaCreatecategoriar): Promise<ResponseCategoriaCreatecategoriar | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}