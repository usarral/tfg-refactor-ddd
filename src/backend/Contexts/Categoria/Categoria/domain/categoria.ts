import { Aggregate } from '@shared/domain/aggregate';
import { CategoriaNombreCategoria } from './value-objects/categoria-nombrecategoria.value-object';
import { CategoriaMinEdadCategoria } from './value-objects/categoria-minedadcategoria.value-object';
import { CategoriaMaxEdadCategoria } from './value-objects/categoria-maxedadcategoria.value-object';
import { CategoriaGeneroCategoria } from './value-objects/categoria-generocategoria.value-object';

export class Categoria extends Aggregate {
  constructor(  private readonly _nombrecategoria: CategoriaNombreCategoria,
  private readonly _minedadcategoria: CategoriaMinEdadCategoria,
  private readonly _maxedadcategoria: CategoriaMaxEdadCategoria,
  private readonly _generocategoria: CategoriaGeneroCategoria,
) {
    super();
  }
}