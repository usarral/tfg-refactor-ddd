import { JugadorDeletejugadorr } from '../../app/use-cases/deleteJugador/jugador-deletejugadorr.use-case';
import { RequestJugadorDeletejugadorr } from '../../app/use-cases/deleteJugador/dto/request-jugador-deletejugadorr.dto';

export class DeleteJugadorJugadorDeleteController {
  constructor(private readonly deletejugadorr: JugadorDeletejugadorr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deletejugadorr.execute(new RequestJugadorDeletejugadorr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}