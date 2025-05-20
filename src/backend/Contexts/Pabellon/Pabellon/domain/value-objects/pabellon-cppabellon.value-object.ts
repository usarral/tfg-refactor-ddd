// add shared value object type to extends 
export class PabellonCPPabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCPPabellon(value: type): void {
    // Add validation logic here
  }
}