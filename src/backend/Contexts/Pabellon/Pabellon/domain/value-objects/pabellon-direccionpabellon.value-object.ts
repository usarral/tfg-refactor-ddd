// add shared value object type to extends 
export class PabellonDireccionPabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsDireccionPabellon(value: type): void {
    // Add validation logic here
  }
}