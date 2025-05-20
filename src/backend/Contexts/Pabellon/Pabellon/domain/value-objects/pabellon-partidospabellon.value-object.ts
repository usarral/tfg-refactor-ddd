// add shared value object type to extends 
export class PabellonPartidosPabellon extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsPartidosPabellon(value: type): void {
    // Add validation logic here
  }
}