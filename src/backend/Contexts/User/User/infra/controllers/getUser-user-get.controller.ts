import { UserGetuserr } from '../../app/use-cases/getUser/user-getuserr.use-case';
import { RequestUserGetuserr } from '../../app/use-cases/getUser/dto/request-user-getuserr.dto';

export class GetUserUserGetController {
  constructor(private readonly getuserr: UserGetuserr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getuserr.execute(new RequestUserGetuserr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}