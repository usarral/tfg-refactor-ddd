// add shared value object type to extends 
export class EquipoCategoriaEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCategoriaEquipo(value: type): void {
    // Add validation logic here
  }
}