// add shared value object type to extends 
export class ClubEquiposClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEquiposClub(value: type): void {
    // Add validation logic here
  }
}