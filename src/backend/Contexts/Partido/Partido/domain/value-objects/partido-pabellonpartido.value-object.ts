// add shared value object type to extends 
export class PartidoPabellonPartido extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsPabellonPartido(value: type): void {
    // Add validation logic here
  }
}