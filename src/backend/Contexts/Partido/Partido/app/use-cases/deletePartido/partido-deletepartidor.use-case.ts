import { RequestPartidoDeletepartidor } from './dto/request-partido-deletepartidor.dto';
import { ResponsePartidoDeletepartidor } from './dto/response-partido-deletepartidor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PartidoDeletepartidor implements UseCase {
  constructor() {}

  async execute(request: RequestPartidoDeletepartidor): Promise<ResponsePartidoDeletepartidor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}