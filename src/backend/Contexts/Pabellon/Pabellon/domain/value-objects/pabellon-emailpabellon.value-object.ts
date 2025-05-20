// add shared value object type to extends 
export class PabellonEmailPabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEmailPabellon(value: type): void {
    // Add validation logic here
  }
}