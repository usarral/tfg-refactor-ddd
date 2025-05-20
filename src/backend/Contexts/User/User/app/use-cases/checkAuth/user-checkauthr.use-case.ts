import { RequestUserCheckauthr } from './dto/request-user-checkauthr.dto';
import { ResponseUserCheckauthr } from './dto/response-user-checkauthr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class UserCheckauthr implements UseCase {
  constructor() {}

  async execute(request: RequestUserCheckauthr): Promise<ResponseUserCheckauthr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}