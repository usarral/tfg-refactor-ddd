// add shared value object type to extends 
export class CategoriaNombreCategoria extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsNombreCategoria(value: type): void {
    // Add validation logic here
  }
}