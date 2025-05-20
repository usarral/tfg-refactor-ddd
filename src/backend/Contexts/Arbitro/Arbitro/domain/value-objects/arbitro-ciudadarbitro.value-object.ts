// add shared value object type to extends 
export class ArbitroCiudadArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCiudadArbitro(value: type): void {
    // Add validation logic here
  }
}