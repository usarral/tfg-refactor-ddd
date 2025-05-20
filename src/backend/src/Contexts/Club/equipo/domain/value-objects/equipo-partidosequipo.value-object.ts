// add shared value object type to extends 
export class EquipoPartidosEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsPartidosEquipo(value: type): void {
    // Add validation logic here
  }
}