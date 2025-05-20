// add shared value object type to extends 
export class StaffDireccionStaff extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsDireccionStaff(value: type): void {
    // Add validation logic here
  }
}