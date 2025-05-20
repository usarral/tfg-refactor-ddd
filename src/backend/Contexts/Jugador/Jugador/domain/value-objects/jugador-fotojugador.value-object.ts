// add shared value object type to extends 
export class JugadorFotoJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFotoJugador(value: type): void {
    // Add validation logic here
  }
}