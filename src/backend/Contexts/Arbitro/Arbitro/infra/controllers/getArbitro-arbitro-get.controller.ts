import { ArbitroGetarbitror } from '../../app/use-cases/getArbitro/arbitro-getarbitror.use-case';
import { RequestArbitroGetarbitror } from '../../app/use-cases/getArbitro/dto/request-arbitro-getarbitror.dto';

export class GetArbitroArbitroGetController {
  constructor(private readonly getarbitror: ArbitroGetarbitror) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getarbitror.execute(new RequestArbitroGetarbitror());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}