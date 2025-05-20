// add shared value object type to extends 
export class JugadorFechaNacimientoJugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFechaNacimientoJugador(value: type): void {
    // Add validation logic here
  }
}