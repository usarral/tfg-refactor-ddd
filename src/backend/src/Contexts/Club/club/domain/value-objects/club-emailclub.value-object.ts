// add shared value object type to extends 
export class ClubEmailClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEmailClub(value: type): void {
    // Add validation logic here
  }
}