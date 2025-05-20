// add shared value object type to extends 
export class PabellonTelefonoPabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsTelefonoPabellon(value: type): void {
    // Add validation logic here
  }
}