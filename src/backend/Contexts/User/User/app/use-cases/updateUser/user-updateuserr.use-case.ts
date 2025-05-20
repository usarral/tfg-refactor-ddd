import { RequestUserUpdateuserr } from './dto/request-user-updateuserr.dto';
import { ResponseUserUpdateuserr } from './dto/response-user-updateuserr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class UserUpdateuserr implements UseCase {
  constructor() {}

  async execute(request: RequestUserUpdateuserr): Promise<ResponseUserUpdateuserr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}