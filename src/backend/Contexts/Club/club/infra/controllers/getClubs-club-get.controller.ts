import { ClubGetclubsr } from '../../app/use-cases/getClubs/club-getclubsr.use-case';
import { RequestClubGetclubsr } from '../../app/use-cases/getClubs/dto/request-club-getclubsr.dto';

export class GetClubsClubGetController {
  constructor(private readonly getclubsr: ClubGetclubsr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getclubsr.execute(new RequestClubGetclubsr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}