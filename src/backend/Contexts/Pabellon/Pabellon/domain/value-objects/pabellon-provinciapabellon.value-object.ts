// add shared value object type to extends 
export class PabellonProvinciaPabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsProvinciaPabellon(value: type): void {
    // Add validation logic here
  }
}