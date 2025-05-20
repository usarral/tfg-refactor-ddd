import { RequestPabellonCreatepabellonr } from './dto/request-pabellon-createpabellonr.dto';
import { ResponsePabellonCreatepabellonr } from './dto/response-pabellon-createpabellonr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PabellonCreatepabellonr implements UseCase {
  constructor() {}

  async execute(request: RequestPabellonCreatepabellonr): Promise<ResponsePabellonCreatepabellonr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}