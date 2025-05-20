import { RequestClubGetclubsr } from './dto/request-club-getclubsr.dto';
import { ResponseClubGetclubsr } from './dto/response-club-getclubsr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ClubGetclubsr implements UseCase {
  constructor() {}

  async execute(request: RequestClubGetclubsr): Promise<ResponseClubGetclubsr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}