import { PartidoCreatepartidor } from '../../app/use-cases/createPartido/partido-createpartidor.use-case';
import { RequestPartidoCreatepartidor } from '../../app/use-cases/createPartido/dto/request-partido-createpartidor.dto';

export class CreatePartidoPartidoPostController {
  constructor(private readonly createpartidor: PartidoCreatepartidor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createpartidor.execute(new RequestPartidoCreatepartidor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}