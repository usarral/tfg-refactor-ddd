// add shared value object type to extends 
export class ArbitroApellido2Arbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsApellido2Arbitro(value: type): void {
    // Add validation logic here
  }
}