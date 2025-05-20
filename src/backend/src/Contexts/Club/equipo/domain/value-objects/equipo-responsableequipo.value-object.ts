// add shared value object type to extends 
export class EquipoResponsableEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsResponsableEquipo(value: type): void {
    // Add validation logic here
  }
}