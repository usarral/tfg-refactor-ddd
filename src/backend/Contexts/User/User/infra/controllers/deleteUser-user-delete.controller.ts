import { UserDeleteuserr } from '../../app/use-cases/deleteUser/user-deleteuserr.use-case';
import { RequestUserDeleteuserr } from '../../app/use-cases/deleteUser/dto/request-user-deleteuserr.dto';

export class DeleteUserUserDeleteController {
  constructor(private readonly deleteuserr: UserDeleteuserr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deleteuserr.execute(new RequestUserDeleteuserr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}