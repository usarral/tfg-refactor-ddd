import { RequestArbitroDeletearbitror } from './dto/request-arbitro-deletearbitror.dto';
import { ResponseArbitroDeletearbitror } from './dto/response-arbitro-deletearbitror.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ArbitroDeletearbitror implements UseCase {
  constructor() {}

  async execute(request: RequestArbitroDeletearbitror): Promise<ResponseArbitroDeletearbitror | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}