import { RequestArbitroGetarbitror } from './dto/request-arbitro-getarbitror.dto';
import { ResponseArbitroGetarbitror } from './dto/response-arbitro-getarbitror.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ArbitroGetarbitror implements UseCase {
  constructor() {}

  async execute(request: RequestArbitroGetarbitror): Promise<ResponseArbitroGetarbitror | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}