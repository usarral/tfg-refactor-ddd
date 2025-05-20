// add shared value object type to extends 
export class JugadorCiudadJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCiudadJugador(value: type): void {
    // Add validation logic here
  }
}