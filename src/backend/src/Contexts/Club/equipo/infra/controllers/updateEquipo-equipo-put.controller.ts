import { EquipoUpdateequipor } from '../../app/use-cases/updateEquipo/equipo-updateequipor.use-case';
import { RequestEquipoUpdateequipor } from '../../app/use-cases/updateEquipo/dto/request-equipo-updateequipor.dto';

export class UpdateEquipoEquipoPutController {
  constructor(private readonly updateequipor: EquipoUpdateequipor) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updateequipor.execute(new RequestEquipoUpdateequipor());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}