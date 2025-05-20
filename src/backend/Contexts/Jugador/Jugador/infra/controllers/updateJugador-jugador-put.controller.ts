import { JugadorUpdatejugadorr } from '../../app/use-cases/updateJugador/jugador-updatejugadorr.use-case';
import { RequestJugadorUpdatejugadorr } from '../../app/use-cases/updateJugador/dto/request-jugador-updatejugadorr.dto';

export class UpdateJugadorJugadorPutController {
  constructor(private readonly updatejugadorr: JugadorUpdatejugadorr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updatejugadorr.execute(new RequestJugadorUpdatejugadorr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}