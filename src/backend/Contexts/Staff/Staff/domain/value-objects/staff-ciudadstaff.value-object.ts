// add shared value object type to extends 
export class StaffCiudadStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCiudadStaff(value: type): void {
    // Add validation logic here
  }
}