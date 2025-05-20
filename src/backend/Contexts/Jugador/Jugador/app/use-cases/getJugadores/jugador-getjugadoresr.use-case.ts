import { RequestJugadorGetjugadoresr } from './dto/request-jugador-getjugadoresr.dto';
import { ResponseJugadorGetjugadoresr } from './dto/response-jugador-getjugadoresr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class JugadorGetjugadoresr implements UseCase {
  constructor() {}

  async execute(request: RequestJugadorGetjugadoresr): Promise<ResponseJugadorGetjugadoresr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}