// add shared value object type to extends 
export class ClubTelefonoClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsTelefonoClub(value: type): void {
    // Add validation logic here
  }
}