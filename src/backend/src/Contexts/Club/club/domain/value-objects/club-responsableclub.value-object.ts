// add shared value object type to extends 
export class ClubResponsableClub extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsResponsableClub(value: type): void {
    // Add validation logic here
  }
}