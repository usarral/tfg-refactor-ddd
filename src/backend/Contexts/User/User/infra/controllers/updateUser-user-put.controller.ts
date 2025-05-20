import { UserUpdateuserr } from '../../app/use-cases/updateUser/user-updateuserr.use-case';
import { RequestUserUpdateuserr } from '../../app/use-cases/updateUser/dto/request-user-updateuserr.dto';

export class UpdateUserUserPutController {
  constructor(private readonly updateuserr: UserUpdateuserr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updateuserr.execute(new RequestUserUpdateuserr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}