import { EquipoGetequiposr } from '../../app/use-cases/getEquipos/equipo-getequiposr.use-case';
import { RequestEquipoGetequiposr } from '../../app/use-cases/getEquipos/dto/request-equipo-getequiposr.dto';

export class GetEquiposEquipoGetController {
  constructor(private readonly getequiposr: EquipoGetequiposr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getequiposr.execute(new RequestEquipoGetequiposr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}