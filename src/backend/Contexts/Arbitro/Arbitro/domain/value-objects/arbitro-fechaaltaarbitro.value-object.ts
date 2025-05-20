// add shared value object type to extends 
export class ArbitroFechaAltaArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFechaAltaArbitro(value: type): void {
    // Add validation logic here
  }
}