import { RequestJugadorUpdatejugadorr } from './dto/request-jugador-updatejugadorr.dto';
import { ResponseJugadorUpdatejugadorr } from './dto/response-jugador-updatejugadorr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class JugadorUpdatejugadorr implements UseCase {
  constructor() {}

  async execute(request: RequestJugadorUpdatejugadorr): Promise<ResponseJugadorUpdatejugadorr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}