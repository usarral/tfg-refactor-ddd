// add shared value object type to extends 
export class StaffEquipoStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEquipoStaff(value: type): void {
    // Add validation logic here
  }
}