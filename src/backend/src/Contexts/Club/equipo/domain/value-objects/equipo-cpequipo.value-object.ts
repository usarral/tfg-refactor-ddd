// add shared value object type to extends 
export class EquipoCPEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCPEquipo(value: type): void {
    // Add validation logic here
  }
}