import { RequestEquipoGetequipor } from './dto/request-equipo-getequipor.dto';
import { ResponseEquipoGetequipor } from './dto/response-equipo-getequipor.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class EquipoGetequipor implements UseCase {
  constructor() {}

  async execute(request: RequestEquipoGetequipor): Promise<ResponseEquipoGetequipor | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}