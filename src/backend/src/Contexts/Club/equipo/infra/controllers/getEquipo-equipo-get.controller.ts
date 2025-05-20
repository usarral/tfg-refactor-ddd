import { EquipoGetequipor } from '../../app/use-cases/getEquipo/equipo-getequipor.use-case';
import { RequestEquipoGetequipor } from '../../app/use-cases/getEquipo/dto/request-equipo-getequipor.dto';

export class GetEquipoEquipoGetController {
  constructor(private readonly getequipor: EquipoGetequipor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getequipor.execute(new RequestEquipoGetequipor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}