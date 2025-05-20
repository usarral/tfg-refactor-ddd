import { JugadorCreatejugadorr } from '../../app/use-cases/createJugador/jugador-createjugadorr.use-case';
import { RequestJugadorCreatejugadorr } from '../../app/use-cases/createJugador/dto/request-jugador-createjugadorr.dto';

export class CreateJugadorJugadorPostController {
  constructor(private readonly createjugadorr: JugadorCreatejugadorr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createjugadorr.execute(new RequestJugadorCreatejugadorr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}