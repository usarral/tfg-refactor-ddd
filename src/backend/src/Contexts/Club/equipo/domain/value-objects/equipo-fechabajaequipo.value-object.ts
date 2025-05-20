// add shared value object type to extends 
export class EquipoFechaBajaEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFechaBajaEquipo(value: type): void {
    // Add validation logic here
  }
}