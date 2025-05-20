import { RequestArbitroUpdatearbitror } from './dto/request-arbitro-updatearbitror.dto';
import { ResponseArbitroUpdatearbitror } from './dto/response-arbitro-updatearbitror.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ArbitroUpdatearbitror implements UseCase {
  constructor() {}

  async execute(request: RequestArbitroUpdatearbitror): Promise<ResponseArbitroUpdatearbitror | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}