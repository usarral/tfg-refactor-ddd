import { EquipoCreateequipor } from '../../app/use-cases/createEquipo/equipo-createequipor.use-case';
import { RequestEquipoCreateequipor } from '../../app/use-cases/createEquipo/dto/request-equipo-createequipor.dto';

export class CreateEquipoEquipoPostController {
  constructor(private readonly createequipor: EquipoCreateequipor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createequipor.execute(new RequestEquipoCreateequipor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}