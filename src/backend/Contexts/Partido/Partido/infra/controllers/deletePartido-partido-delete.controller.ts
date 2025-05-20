import { PartidoDeletepartidor } from '../../app/use-cases/deletePartido/partido-deletepartidor.use-case';
import { RequestPartidoDeletepartidor } from '../../app/use-cases/deletePartido/dto/request-partido-deletepartidor.dto';

export class DeletePartidoPartidoDeleteController {
  constructor(private readonly deletepartidor: PartidoDeletepartidor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deletepartidor.execute(new RequestPartidoDeletepartidor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}