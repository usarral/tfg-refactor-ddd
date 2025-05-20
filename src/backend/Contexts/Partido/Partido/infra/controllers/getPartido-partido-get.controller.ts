import { PartidoGetpartidor } from '../../app/use-cases/getPartido/partido-getpartidor.use-case';
import { RequestPartidoGetpartidor } from '../../app/use-cases/getPartido/dto/request-partido-getpartidor.dto';

export class GetPartidoPartidoGetController {
  constructor(private readonly getpartidor: PartidoGetpartidor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getpartidor.execute(new RequestPartidoGetpartidor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}