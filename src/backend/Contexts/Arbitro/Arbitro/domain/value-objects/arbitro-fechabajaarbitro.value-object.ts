// add shared value object type to extends 
export class ArbitroFechaBajaArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFechaBajaArbitro(value: type): void {
    // Add validation logic here
  }
}