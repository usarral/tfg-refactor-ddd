// add shared value object type to extends 
export class CategoriaMaxEdadCategoria extends { //example StringValueObject
  constructor(private readonly value: type) {
    super(value);
    this.validate(value);
  }
  
  private ensureIsMaxEdadCategoria(value: type): void {
    // Add validation logic here
  }
}