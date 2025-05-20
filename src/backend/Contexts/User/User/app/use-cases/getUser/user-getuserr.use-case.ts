import { RequestUserGetuserr } from './dto/request-user-getuserr.dto';
import { ResponseUserGetuserr } from './dto/response-user-getuserr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class UserGetuserr implements UseCase {
  constructor() {}

  async execute(request: RequestUserGetuserr): Promise<ResponseUserGetuserr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}