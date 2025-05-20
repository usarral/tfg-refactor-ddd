// add shared value object type to extends 
export class StaffTelefonoStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsTelefonoStaff(value: type): void {
    // Add validation logic here
  }
}