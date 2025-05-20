// add shared value object type to extends 
export class JugadorApellido2Jugador extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsApellido2Jugador(value: type): void {
    // Add validation logic here
  }
}