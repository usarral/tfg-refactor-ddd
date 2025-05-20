// add shared value object type to extends 
export class UserArbitroUser extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsArbitroUser(value: type): void {
    // Add validation logic here
  }
}