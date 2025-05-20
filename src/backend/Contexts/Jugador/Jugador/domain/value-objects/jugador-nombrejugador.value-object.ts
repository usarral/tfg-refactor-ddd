// add shared value object type to extends 
export class JugadorNombreJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNombreJugador(value: type): void {
    // Add validation logic here
  }
}