// add shared value object type to extends 
export class ArbitroProvinciaArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsProvinciaArbitro(value: type): void {
    // Add validation logic here
  }
}