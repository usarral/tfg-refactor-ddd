// add shared value object type to extends 
export class PartidoGolesLocalPartido extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsGolesLocalPartido(value: type): void {
    // Add validation logic here
  }
}