// add shared value object type to extends 
export class JugadorTelefonoJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsTelefonoJugador(value: type): void {
    // Add validation logic here
  }
}