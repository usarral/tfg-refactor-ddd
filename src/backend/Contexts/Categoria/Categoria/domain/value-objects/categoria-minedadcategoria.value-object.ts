// add shared value object type to extends 
export class CategoriaMinEdadCategoria extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsMinEdadCategoria(value: type): void {
    // Add validation logic here
  }
}