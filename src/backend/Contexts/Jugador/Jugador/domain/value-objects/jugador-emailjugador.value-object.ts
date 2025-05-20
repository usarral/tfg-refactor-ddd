// add shared value object type to extends 
export class JugadorEmailJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEmailJugador(value: type): void {
    // Add validation logic here
  }
}