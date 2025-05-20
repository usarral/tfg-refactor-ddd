import { ClubCreateclubr } from '../../app/use-cases/createClub/club-createclubr.use-case';
import { RequestClubCreateclubr } from '../../app/use-cases/createClub/dto/request-club-createclubr.dto';

export class CreateClubClubPostController {
  constructor(private readonly createclubr: ClubCreateclubr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createclubr.execute(new RequestClubCreateclubr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}