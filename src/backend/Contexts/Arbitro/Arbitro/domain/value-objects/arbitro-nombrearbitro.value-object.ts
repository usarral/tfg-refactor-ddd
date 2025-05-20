// add shared value object type to extends 
export class ArbitroNombreArbitro extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNombreArbitro(value: type): void {
    // Add validation logic here
  }
}