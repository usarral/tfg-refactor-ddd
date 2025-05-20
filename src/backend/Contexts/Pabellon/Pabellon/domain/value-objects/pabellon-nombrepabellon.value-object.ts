// add shared value object type to extends 
export class PabellonNombrePabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNombrePabellon(value: type): void {
    // Add validation logic here
  }
}