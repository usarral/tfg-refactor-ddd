// add shared value object type to extends 
export class StaffClubStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsClubStaff(value: type): void {
    // Add validation logic here
  }
}