import { PartidoUpdatepartidor } from '../../app/use-cases/updatePartido/partido-updatepartidor.use-case';
import { RequestPartidoUpdatepartidor } from '../../app/use-cases/updatePartido/dto/request-partido-updatepartidor.dto';

export class UpdatePartidoPartidoPutController {
  constructor(private readonly updatepartidor: PartidoUpdatepartidor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updatepartidor.execute(new RequestPartidoUpdatepartidor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}