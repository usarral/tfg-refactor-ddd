// add shared value object type to extends 
export class ClubDireccionClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsDireccionClub(value: type): void {
    // Add validation logic here
  }
}