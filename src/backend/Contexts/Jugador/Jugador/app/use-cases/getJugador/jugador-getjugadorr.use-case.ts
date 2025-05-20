import { RequestJugadorGetjugadorr } from './dto/request-jugador-getjugadorr.dto';
import { ResponseJugadorGetjugadorr } from './dto/response-jugador-getjugadorr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class JugadorGetjugadorr implements UseCase {
  constructor() {}

  async execute(request: RequestJugadorGetjugadorr): Promise<ResponseJugadorGetjugadorr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}