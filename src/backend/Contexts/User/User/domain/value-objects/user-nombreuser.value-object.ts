// add shared value object type to extends 
export class UserNombreUser extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNombreUser(value: type): void {
    // Add validation logic here
  }
}