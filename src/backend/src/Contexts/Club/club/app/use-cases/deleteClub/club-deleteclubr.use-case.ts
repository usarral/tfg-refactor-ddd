import { RequestClubDeleteclubr } from './dto/request-club-deleteclubr.dto';
import { ResponseClubDeleteclubr } from './dto/response-club-deleteclubr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ClubDeleteclubr implements UseCase {
  constructor() {}

  async execute(request: RequestClubDeleteclubr): Promise<ResponseClubDeleteclubr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}