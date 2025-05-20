// add shared value object type to extends 
export class PartidoEquipoLocalPartido extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEquipoLocalPartido(value: type): void {
    // Add validation logic here
  }
}