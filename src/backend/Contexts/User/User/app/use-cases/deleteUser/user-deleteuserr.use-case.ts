import { RequestUserDeleteuserr } from './dto/request-user-deleteuserr.dto';
import { ResponseUserDeleteuserr } from './dto/response-user-deleteuserr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class UserDeleteuserr implements UseCase {
  constructor() {}

  async execute(request: RequestUserDeleteuserr): Promise<ResponseUserDeleteuserr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}