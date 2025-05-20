import { PabellonDeletepabellonr } from '../../app/use-cases/deletePabellon/pabellon-deletepabellonr.use-case';
import { RequestPabellonDeletepabellonr } from '../../app/use-cases/deletePabellon/dto/request-pabellon-deletepabellonr.dto';

export class DeletePabellonPabellonDeleteController {
  constructor(private readonly deletepabellonr: PabellonDeletepabellonr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deletepabellonr.execute(new RequestPabellonDeletepabellonr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}