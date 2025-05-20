import { RequestArbitroGetarbitrosr } from './dto/request-arbitro-getarbitrosr.dto';
import { ResponseArbitroGetarbitrosr } from './dto/response-arbitro-getarbitrosr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ArbitroGetarbitrosr implements UseCase {
  constructor() {}

  async execute(request: RequestArbitroGetarbitrosr): Promise<ResponseArbitroGetarbitrosr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}