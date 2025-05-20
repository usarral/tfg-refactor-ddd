// add shared value object type to extends 
export class PartidoResultadoPartido extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsResultadoPartido(value: type): void {
    // Add validation logic here
  }
}