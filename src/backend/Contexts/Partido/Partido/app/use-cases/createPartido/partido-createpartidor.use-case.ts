import { RequestPartidoCreatepartidor } from './dto/request-partido-createpartidor.dto';
import { ResponsePartidoCreatepartidor } from './dto/response-partido-createpartidor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PartidoCreatepartidor implements UseCase {
  constructor() {}

  async execute(request: RequestPartidoCreatepartidor): Promise<ResponsePartidoCreatepartidor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}