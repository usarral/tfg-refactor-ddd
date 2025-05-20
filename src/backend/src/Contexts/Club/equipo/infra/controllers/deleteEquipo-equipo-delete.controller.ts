import { EquipoDeleteequipor } from '../../app/use-cases/deleteEquipo/equipo-deleteequipor.use-case';
import { RequestEquipoDeleteequipor } from '../../app/use-cases/deleteEquipo/dto/request-equipo-deleteequipor.dto';

export class DeleteEquipoEquipoDeleteController {
  constructor(private readonly deleteequipor: EquipoDeleteequipor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deleteequipor.execute(new RequestEquipoDeleteequipor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}