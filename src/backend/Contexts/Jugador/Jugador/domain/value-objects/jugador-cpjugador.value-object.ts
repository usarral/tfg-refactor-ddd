// add shared value object type to extends 
export class JugadorCPJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCPJugador(value: type): void {
    // Add validation logic here
  }
}