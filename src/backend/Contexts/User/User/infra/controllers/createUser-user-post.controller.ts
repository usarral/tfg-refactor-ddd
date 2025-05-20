import { UserCreateuserr } from '../../app/use-cases/createUser/user-createuserr.use-case';
import { RequestUserCreateuserr } from '../../app/use-cases/createUser/dto/request-user-createuserr.dto';

export class CreateUserUserPostController {
  constructor(private readonly createuserr: UserCreateuserr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createuserr.execute(new RequestUserCreateuserr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}