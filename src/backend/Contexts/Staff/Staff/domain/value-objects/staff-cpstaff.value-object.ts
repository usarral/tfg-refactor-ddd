// add shared value object type to extends 
export class StaffCPStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCPStaff(value: type): void {
    // Add validation logic here
  }
}