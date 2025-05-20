// add shared value object type to extends 
export class UserClubUser extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsClubUser(value: type): void {
    // Add validation logic here
  }
}