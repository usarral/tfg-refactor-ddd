// add shared value object type to extends 
export class StaffCargoStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCargoStaff(value: type): void {
    // Add validation logic here
  }
}