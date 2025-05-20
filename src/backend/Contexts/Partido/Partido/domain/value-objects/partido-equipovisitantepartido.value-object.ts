// add shared value object type to extends 
export class PartidoEquipoVisitantePartido extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEquipoVisitantePartido(value: type): void {
    // Add validation logic here
  }
}