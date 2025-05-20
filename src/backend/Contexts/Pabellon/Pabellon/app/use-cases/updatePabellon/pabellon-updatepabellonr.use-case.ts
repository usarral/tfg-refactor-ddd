import { RequestPabellonUpdatepabellonr } from './dto/request-pabellon-updatepabellonr.dto';
import { ResponsePabellonUpdatepabellonr } from './dto/response-pabellon-updatepabellonr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PabellonUpdatepabellonr implements UseCase {
  constructor() {}

  async execute(request: RequestPabellonUpdatepabellonr): Promise<ResponsePabellonUpdatepabellonr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}