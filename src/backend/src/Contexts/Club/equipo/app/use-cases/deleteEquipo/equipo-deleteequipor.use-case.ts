import { RequestEquipoDeleteequipor } from './dto/request-equipo-deleteequipor.dto';
import { ResponseEquipoDeleteequipor } from './dto/response-equipo-deleteequipor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class EquipoDeleteequipor implements UseCase {
  constructor() {}

  async execute(request: RequestEquipoDeleteequipor): Promise<ResponseEquipoDeleteequipor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}