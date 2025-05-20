import { RequestClubUpdateclubr } from './dto/request-club-updateclubr.dto';
import { ResponseClubUpdateclubr } from './dto/response-club-updateclubr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class ClubUpdateclubr implements UseCase {
  constructor() {}

  async execute(request: RequestClubUpdateclubr): Promise<ResponseClubUpdateclubr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}