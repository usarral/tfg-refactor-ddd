import { ArbitroDeletearbitror } from '../../app/use-cases/deleteArbitro/arbitro-deletearbitror.use-case';
import { RequestArbitroDeletearbitror } from '../../app/use-cases/deleteArbitro/dto/request-arbitro-deletearbitror.dto';

export class DeleteArbitroArbitroDeleteController {
  constructor(private readonly deletearbitror: ArbitroDeletearbitror) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deletearbitror.execute(new RequestArbitroDeletearbitror());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}