// add shared value object type to extends 
export class ArbitroTelefonoArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsTelefonoArbitro(value: type): void {
    // Add validation logic here
  }
}