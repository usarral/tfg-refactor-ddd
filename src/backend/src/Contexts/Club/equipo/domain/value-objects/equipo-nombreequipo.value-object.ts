// add shared value object type to extends 
export class EquipoNombreEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNombreEquipo(value: type): void {
    // Add validation logic here
  }
}