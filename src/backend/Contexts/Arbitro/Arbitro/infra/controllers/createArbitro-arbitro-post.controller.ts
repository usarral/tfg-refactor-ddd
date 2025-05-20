import { ArbitroCreatearbitror } from '../../app/use-cases/createArbitro/arbitro-createarbitror.use-case';
import { RequestArbitroCreatearbitror } from '../../app/use-cases/createArbitro/dto/request-arbitro-createarbitror.dto';

export class CreateArbitroArbitroPostController {
  constructor(private readonly createarbitror: ArbitroCreatearbitror) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createarbitror.execute(new RequestArbitroCreatearbitror());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}