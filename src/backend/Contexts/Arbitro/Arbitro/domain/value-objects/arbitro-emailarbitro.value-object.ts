// add shared value object type to extends 
export class ArbitroEmailArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEmailArbitro(value: type): void {
    // Add validation logic here
  }
}