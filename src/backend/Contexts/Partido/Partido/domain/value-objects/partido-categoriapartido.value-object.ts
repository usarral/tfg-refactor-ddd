// add shared value object type to extends 
export class PartidoCategoriaPartido extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCategoriaPartido(value: type): void {
    // Add validation logic here
  }
}