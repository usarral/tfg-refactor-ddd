import { RequestArbitroCreatearbitror } from './dto/request-arbitro-createarbitror.dto';
import { ResponseArbitroCreatearbitror } from './dto/response-arbitro-createarbitror.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ArbitroCreatearbitror implements UseCase {
  constructor() {}

  async execute(request: RequestArbitroCreatearbitror): Promise<ResponseArbitroCreatearbitror | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}