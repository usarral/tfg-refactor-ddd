import { PabellonUpdatepabellonr } from '../../app/use-cases/updatePabellon/pabellon-updatepabellonr.use-case';
import { RequestPabellonUpdatepabellonr } from '../../app/use-cases/updatePabellon/dto/request-pabellon-updatepabellonr.dto';

export class UpdatePabellonPabellonPutController {
  constructor(private readonly updatepabellonr: PabellonUpdatepabellonr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updatepabellonr.execute(new RequestPabellonUpdatepabellonr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}