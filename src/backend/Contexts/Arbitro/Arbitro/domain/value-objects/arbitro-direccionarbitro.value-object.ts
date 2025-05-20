// add shared value object type to extends 
export class ArbitroDireccionArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsDireccionArbitro(value: type): void {
    // Add validation logic here
  }
}