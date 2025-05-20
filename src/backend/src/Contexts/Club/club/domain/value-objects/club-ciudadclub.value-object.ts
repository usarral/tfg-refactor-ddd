// add shared value object type to extends 
export class ClubCiudadClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCiudadClub(value: type): void {
    // Add validation logic here
  }
}