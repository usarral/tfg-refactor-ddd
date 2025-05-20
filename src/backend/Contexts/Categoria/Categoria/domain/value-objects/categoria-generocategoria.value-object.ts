// add shared value object type to extends 
export class CategoriaGeneroCategoria extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsGeneroCategoria(value: type): void {
    // Add validation logic here
  }
}