import { ArbitroUpdatearbitror } from '../../app/use-cases/updateArbitro/arbitro-updatearbitror.use-case';
import { RequestArbitroUpdatearbitror } from '../../app/use-cases/updateArbitro/dto/request-arbitro-updatearbitror.dto';

export class UpdateArbitroArbitroPutController {
  constructor(private readonly updatearbitror: ArbitroUpdatearbitror) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updatearbitror.execute(new RequestArbitroUpdatearbitror());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}