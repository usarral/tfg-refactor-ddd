import { RequestPartidoUpdatepartidor } from './dto/request-partido-updatepartidor.dto';
import { ResponsePartidoUpdatepartidor } from './dto/response-partido-updatepartidor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PartidoUpdatepartidor implements UseCase {
  constructor() {}

  async execute(request: RequestPartidoUpdatepartidor): Promise<ResponsePartidoUpdatepartidor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}