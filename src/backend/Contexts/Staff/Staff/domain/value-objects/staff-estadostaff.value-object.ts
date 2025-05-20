// add shared value object type to extends 
export class StaffEstadoStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEstadoStaff(value: type): void {
    // Add validation logic here
  }
}