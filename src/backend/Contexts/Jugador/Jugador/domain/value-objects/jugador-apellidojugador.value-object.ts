// add shared value object type to extends 
export class JugadorApellidoJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsApellidoJugador(value: type): void {
    // Add validation logic here
  }
}