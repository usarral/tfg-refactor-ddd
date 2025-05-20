// add shared value object type to extends 
export class JugadorEquipoJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEquipoJugador(value: type): void {
    // Add validation logic here
  }
}