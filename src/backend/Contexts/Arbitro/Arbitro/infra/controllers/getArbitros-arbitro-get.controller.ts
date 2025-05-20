import { ArbitroGetarbitrosr } from '../../app/use-cases/getArbitros/arbitro-getarbitrosr.use-case';
import { RequestArbitroGetarbitrosr } from '../../app/use-cases/getArbitros/dto/request-arbitro-getarbitrosr.dto';

export class GetArbitrosArbitroGetController {
  constructor(private readonly getarbitrosr: ArbitroGetarbitrosr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getarbitrosr.execute(new RequestArbitroGetarbitrosr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}