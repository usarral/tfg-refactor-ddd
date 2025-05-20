import { RequestJugadorCreatejugadorr } from './dto/request-jugador-createjugadorr.dto';
import { ResponseJugadorCreatejugadorr } from './dto/response-jugador-createjugadorr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class JugadorCreatejugadorr implements UseCase {
  constructor() {}

  async execute(request: RequestJugadorCreatejugadorr): Promise<ResponseJugadorCreatejugadorr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}