import { PartidoGetpartidosr } from '../../app/use-cases/getPartidos/partido-getpartidosr.use-case';
import { RequestPartidoGetpartidosr } from '../../app/use-cases/getPartidos/dto/request-partido-getpartidosr.dto';

export class GetPartidosPartidoGetController {
  constructor(private readonly getpartidosr: PartidoGetpartidosr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getpartidosr.execute(new RequestPartidoGetpartidosr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}