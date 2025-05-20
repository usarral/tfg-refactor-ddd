// add shared value object type to extends 
export class UserTokenUser extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsTokenUser(value: type): void {
    // Add validation logic here
  }
}