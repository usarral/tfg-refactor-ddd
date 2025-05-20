import { RequestPartidoGetpartidor } from './dto/request-partido-getpartidor.dto';
import { ResponsePartidoGetpartidor } from './dto/response-partido-getpartidor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PartidoGetpartidor implements UseCase {
  constructor() {}

  async execute(request: RequestPartidoGetpartidor): Promise<ResponsePartidoGetpartidor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}