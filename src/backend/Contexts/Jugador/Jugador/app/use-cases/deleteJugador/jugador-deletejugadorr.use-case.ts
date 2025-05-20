import { RequestJugadorDeletejugadorr } from './dto/request-jugador-deletejugadorr.dto';
import { ResponseJugadorDeletejugadorr } from './dto/response-jugador-deletejugadorr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class JugadorDeletejugadorr implements UseCase {
  constructor() {}

  async execute(request: RequestJugadorDeletejugadorr): Promise<ResponseJugadorDeletejugadorr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}