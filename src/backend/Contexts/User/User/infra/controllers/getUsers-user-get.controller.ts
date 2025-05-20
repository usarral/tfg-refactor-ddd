import { UserGetusersr } from '../../app/use-cases/getUsers/user-getusersr.use-case';
import { RequestUserGetusersr } from '../../app/use-cases/getUsers/dto/request-user-getusersr.dto';

export class GetUsersUserGetController {
  constructor(private readonly getusersr: UserGetusersr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getusersr.execute(new RequestUserGetusersr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}