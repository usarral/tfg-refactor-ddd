import { RequestPabellonGetpabellonesr } from './dto/request-pabellon-getpabellonesr.dto';
import { ResponsePabellonGetpabellonesr } from './dto/response-pabellon-getpabellonesr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class PabellonGetpabellonesr implements UseCase {
  constructor() {}

  async execute(request: RequestPabellonGetpabellonesr): Promise<ResponsePabellonGetpabellonesr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}