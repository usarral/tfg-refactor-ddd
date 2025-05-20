import { RequestClubCreateclubr } from './dto/request-club-createclubr.dto';
import { ResponseClubCreateclubr } from './dto/response-club-createclubr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ClubCreateclubr implements UseCase {
  constructor() {}

  async execute(request: RequestClubCreateclubr): Promise<ResponseClubCreateclubr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}