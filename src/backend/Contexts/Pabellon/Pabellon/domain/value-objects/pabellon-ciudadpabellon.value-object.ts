// add shared value object type to extends 
export class PabellonCiudadPabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCiudadPabellon(value: type): void {
    // Add validation logic here
  }
}