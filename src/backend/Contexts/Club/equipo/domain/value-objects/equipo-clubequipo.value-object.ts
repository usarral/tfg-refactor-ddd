// add shared value object type to extends 
export class EquipoClubEquipo extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsClubEquipo(value: type): void {
    // Add validation logic here
  }
}