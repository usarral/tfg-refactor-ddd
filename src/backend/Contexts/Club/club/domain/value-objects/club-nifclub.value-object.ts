// add shared value object type to extends 
export class ClubNIFClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNIFClub(value: type): void {
    // Add validation logic here
  }
}