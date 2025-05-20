import { RequestPartidoGetpartidosr } from './dto/request-partido-getpartidosr.dto';
import { ResponsePartidoGetpartidosr } from './dto/response-partido-getpartidosr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PartidoGetpartidosr implements UseCase {
  constructor() {}

  async execute(request: RequestPartidoGetpartidosr): Promise<ResponsePartidoGetpartidosr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}