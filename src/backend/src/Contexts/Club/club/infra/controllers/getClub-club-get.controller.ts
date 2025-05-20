import { ClubGetclubr } from '../../app/use-cases/getClub/club-getclubr.use-case';
import { RequestClubGetclubr } from '../../app/use-cases/getClub/dto/request-club-getclubr.dto';

export class GetClubClubGetController {
  constructor(private readonly getclubr: ClubGetclubr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getclubr.execute(new RequestClubGetclubr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}