import { RequestPabellonGetpabellonr } from './dto/request-pabellon-getpabellonr.dto';
import { ResponsePabellonGetpabellonr } from './dto/response-pabellon-getpabellonr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PabellonGetpabellonr implements UseCase {
  constructor() {}

  async execute(request: RequestPabellonGetpabellonr): Promise<ResponsePabellonGetpabellonr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}