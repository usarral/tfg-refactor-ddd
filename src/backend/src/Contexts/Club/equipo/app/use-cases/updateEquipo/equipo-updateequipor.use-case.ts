import { RequestEquipoUpdateequipor } from './dto/request-equipo-updateequipor.dto';
import { ResponseEquipoUpdateequipor } from './dto/response-equipo-updateequipor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class EquipoUpdateequipor implements UseCase {
  constructor() {}

  async execute(request: RequestEquipoUpdateequipor): Promise<ResponseEquipoUpdateequipor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}