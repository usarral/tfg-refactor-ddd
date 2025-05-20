import { PabellonGetpabellonr } from '../../app/use-cases/getPabellon/pabellon-getpabellonr.use-case';
import { RequestPabellonGetpabellonr } from '../../app/use-cases/getPabellon/dto/request-pabellon-getpabellonr.dto';

export class GetPabellonPabellonGetController {
  constructor(private readonly getpabellonr: PabellonGetpabellonr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getpabellonr.execute(new RequestPabellonGetpabellonr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}