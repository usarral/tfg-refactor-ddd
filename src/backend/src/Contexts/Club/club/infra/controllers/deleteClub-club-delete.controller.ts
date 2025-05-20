import { ClubDeleteclubr } from '../../app/use-cases/deleteClub/club-deleteclubr.use-case';
import { RequestClubDeleteclubr } from '../../app/use-cases/deleteClub/dto/request-club-deleteclubr.dto';

export class DeleteClubClubDeleteController {
  constructor(private readonly deleteclubr: ClubDeleteclubr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deleteclubr.execute(new RequestClubDeleteclubr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}