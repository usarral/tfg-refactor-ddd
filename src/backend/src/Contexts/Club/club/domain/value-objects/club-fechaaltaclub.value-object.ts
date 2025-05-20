// add shared value object type to extends 
export class ClubFechaAltaClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsFechaAltaClub(value: type): void {
    // Add validation logic here
  }
}