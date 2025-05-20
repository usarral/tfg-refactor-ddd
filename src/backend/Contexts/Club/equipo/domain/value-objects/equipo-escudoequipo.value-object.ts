// add shared value object type to extends 
export class EquipoEscudoEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEscudoEquipo(value: type): void {
    // Add validation logic here
  }
}