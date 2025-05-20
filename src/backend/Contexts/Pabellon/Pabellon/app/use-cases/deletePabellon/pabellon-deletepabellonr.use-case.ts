import { RequestPabellonDeletepabellonr } from './dto/request-pabellon-deletepabellonr.dto';
import { ResponsePabellonDeletepabellonr } from './dto/response-pabellon-deletepabellonr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PabellonDeletepabellonr implements UseCase {
  constructor() {}

  async execute(request: RequestPabellonDeletepabellonr): Promise<ResponsePabellonDeletepabellonr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}