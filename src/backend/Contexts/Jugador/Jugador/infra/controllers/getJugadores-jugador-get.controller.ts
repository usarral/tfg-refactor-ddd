import { JugadorGetjugadoresr } from '../../app/use-cases/getJugadores/jugador-getjugadoresr.use-case';
import { RequestJugadorGetjugadoresr } from '../../app/use-cases/getJugadores/dto/request-jugador-getjugadoresr.dto';

export class GetJugadoresJugadorGetController {
  constructor(private readonly getjugadoresr: JugadorGetjugadoresr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getjugadoresr.execute(new RequestJugadorGetjugadoresr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}