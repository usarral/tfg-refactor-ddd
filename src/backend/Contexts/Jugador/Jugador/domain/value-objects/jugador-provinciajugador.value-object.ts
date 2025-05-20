// add shared value object type to extends 
export class JugadorProvinciaJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsProvinciaJugador(value: type): void {
    // Add validation logic here
  }
}