import { RequestEquipoCreateequipor } from './dto/request-equipo-createequipor.dto';
import { ResponseEquipoCreateequipor } from './dto/response-equipo-createequipor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class EquipoCreateequipor implements UseCase {
  constructor() {}

  async execute(request: RequestEquipoCreateequipor): Promise<ResponseEquipoCreateequipor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}