// add shared value object type to extends 
export class ArbitroFotoArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFotoArbitro(value: type): void {
    // Add validation logic here
  }
}