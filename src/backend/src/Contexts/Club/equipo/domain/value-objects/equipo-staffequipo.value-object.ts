// add shared value object type to extends 
export class EquipoStaffEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsStaffEquipo(value: type): void {
    // Add validation logic here
  }
}