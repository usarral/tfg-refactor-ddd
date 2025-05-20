// add shared value object type to extends 
export class StaffApellido2Staff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsApellido2Staff(value: type): void {
    // Add validation logic here
  }
}