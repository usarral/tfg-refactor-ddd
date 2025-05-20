// add shared value object type to extends 
export class ArbitroPartidosArbitrados extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsPartidosArbitrados(value: type): void {
    // Add validation logic here
  }
}