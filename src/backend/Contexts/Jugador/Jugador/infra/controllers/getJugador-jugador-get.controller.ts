import { JugadorGetjugadorr } from '../../app/use-cases/getJugador/jugador-getjugadorr.use-case';
import { RequestJugadorGetjugadorr } from '../../app/use-cases/getJugador/dto/request-jugador-getjugadorr.dto';

export class GetJugadorJugadorGetController {
  constructor(private readonly getjugadorr: JugadorGetjugadorr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getjugadorr.execute(new RequestJugadorGetjugadorr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}