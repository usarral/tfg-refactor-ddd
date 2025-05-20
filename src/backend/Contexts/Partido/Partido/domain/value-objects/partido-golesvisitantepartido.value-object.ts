// add shared value object type to extends 
export class PartidoGolesVisitantePartido extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsGolesVisitantePartido(value: type): void {
    // Add validation logic here
  }
}