// add shared value object type to extends 
export class EquipoFechaAltaEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFechaAltaEquipo(value: type): void {
    // Add validation logic here
  }
}