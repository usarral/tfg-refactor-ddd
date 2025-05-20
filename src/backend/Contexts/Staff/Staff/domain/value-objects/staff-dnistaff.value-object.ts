// add shared value object type to extends 
export class StaffDniStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsDniStaff(value: type): void {
    // Add validation logic here
  }
}