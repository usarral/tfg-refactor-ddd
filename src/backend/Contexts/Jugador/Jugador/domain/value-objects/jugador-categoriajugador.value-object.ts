// add shared value object type to extends 
export class JugadorCategoriaJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCategoriaJugador(value: type): void {
    // Add validation logic here
  }
}