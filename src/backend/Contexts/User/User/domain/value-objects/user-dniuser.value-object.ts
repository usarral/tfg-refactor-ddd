// add shared value object type to extends 
export class UserDNIUser extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsDNIUser(value: type): void {
    // Add validation logic here
  }
}