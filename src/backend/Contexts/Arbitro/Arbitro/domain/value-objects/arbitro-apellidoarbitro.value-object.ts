// add shared value object type to extends 
export class ArbitroApellidoArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsApellidoArbitro(value: type): void {
    // Add validation logic here
  }
}