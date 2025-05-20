// add shared value object type to extends 
export class JugadorDireccionJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsDireccionJugador(value: type): void {
    // Add validation logic here
  }
}