import { PabellonCreatepabellonr } from '../../app/use-cases/createPabellon/pabellon-createpabellonr.use-case';
import { RequestPabellonCreatepabellonr } from '../../app/use-cases/createPabellon/dto/request-pabellon-createpabellonr.dto';

export class CreatePabellonPabellonPostController {
  constructor(private readonly createpabellonr: PabellonCreatepabellonr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createpabellonr.execute(new RequestPabellonCreatepabellonr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}