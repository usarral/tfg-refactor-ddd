import { RequestEquipoGetequiposr } from './dto/request-equipo-getequiposr.dto';
import { ResponseEquipoGetequiposr } from './dto/response-equipo-getequiposr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class EquipoGetequiposr implements UseCase {
  constructor() {}

  async execute(request: RequestEquipoGetequiposr): Promise<ResponseEquipoGetequiposr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}