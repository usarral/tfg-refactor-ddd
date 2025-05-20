// add shared value object type to extends 
export class UserEmailUser extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsEmailUser(value: type): void {
    // Add validation logic here
  }
}