import { ClubUpdateclubr } from '../../app/use-cases/updateClub/club-updateclubr.use-case';
import { RequestClubUpdateclubr } from '../../app/use-cases/updateClub/dto/request-club-updateclubr.dto';

export class UpdateClubClubPutController {
  constructor(private readonly updateclubr: ClubUpdateclubr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updateclubr.execute(new RequestClubUpdateclubr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}