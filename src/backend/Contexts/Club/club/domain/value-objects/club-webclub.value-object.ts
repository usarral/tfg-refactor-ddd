// add shared value object type to extends 
export class ClubWebClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsWebClub(value: type): void {
    // Add validation logic here
  }
}