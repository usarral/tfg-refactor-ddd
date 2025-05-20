import { RequestClubGetclubr } from './dto/request-club-getclubr.dto';
import { ResponseClubGetclubr } from './dto/response-club-getclubr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ClubGetclubr implements UseCase {
  constructor() {}

  async execute(request: RequestClubGetclubr): Promise<ResponseClubGetclubr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}