// add shared value object type to extends 
export class ClubNombreClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNombreClub(value: type): void {
    // Add validation logic here
  }
}