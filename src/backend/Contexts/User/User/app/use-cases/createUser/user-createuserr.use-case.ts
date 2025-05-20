import { RequestUserCreateuserr } from './dto/request-user-createuserr.dto';
import { ResponseUserCreateuserr } from './dto/response-user-createuserr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class UserCreateuserr implements UseCase {
  constructor() {}

  async execute(request: RequestUserCreateuserr): Promise<ResponseUserCreateuserr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}