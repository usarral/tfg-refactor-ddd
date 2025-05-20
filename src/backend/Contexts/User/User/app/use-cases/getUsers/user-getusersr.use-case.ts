import { RequestUserGetusersr } from './dto/request-user-getusersr.dto';
import { ResponseUserGetusersr } from './dto/response-user-getusersr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class UserGetusersr implements UseCase {
  constructor() {}

  async execute(request: RequestUserGetusersr): Promise<ResponseUserGetusersr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}