import { PabellonGetpabellonesr } from '../../app/use-cases/getPabellones/pabellon-getpabellonesr.use-case';
import { RequestPabellonGetpabellonesr } from '../../app/use-cases/getPabellones/dto/request-pabellon-getpabellonesr.dto';

export class GetPabellonesPabellonGetController {
  constructor(private readonly getpabellonesr: PabellonGetpabellonesr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getpabellonesr.execute(new RequestPabellonGetpabellonesr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}