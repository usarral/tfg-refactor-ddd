// add shared value object type to extends 
export class EquipoProvinciaEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsProvinciaEquipo(value: type): void {
    // Add validation logic here
  }
}