// add shared value object type to extends 
export class ArbitroFechaNacimientoArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFechaNacimientoArbitro(value: type): void {
    // Add validation logic here
  }
}