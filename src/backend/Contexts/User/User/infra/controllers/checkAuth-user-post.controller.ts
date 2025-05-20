import { UserCheckauthr } from '../../app/use-cases/checkAuth/user-checkauthr.use-case';
import { RequestUserCheckauthr } from '../../app/use-cases/checkAuth/dto/request-user-checkauthr.dto';

export class CheckAuthUserPostController {
  constructor(private readonly checkauthr: UserCheckauthr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.checkauthr.execute(new RequestUserCheckauthr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}