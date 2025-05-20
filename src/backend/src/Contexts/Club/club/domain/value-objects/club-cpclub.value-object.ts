// add shared value object type to extends 
export class ClubCPClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsCPClub(value: type): void {
    // Add validation logic here
  }
}