// add shared value object type to extends 
export class ClubProvinciaClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsProvinciaClub(value: type): void {
    // Add validation logic here
  }
}