// add shared value object type to extends 
export class StaffApellidoStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsApellidoStaff(value: type): void {
    // Add validation logic here
  }
}