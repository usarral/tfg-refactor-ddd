import { Aggregate } from '@shared/domain/aggregate';
import { PartidoEquipoLocalPartido } from './value-objects/partido-equipolocalpartido.value-object';
import { PartidoEquipoVisitantePartido } from './value-objects/partido-equipovisitantepartido.value-object';
import { PartidoCategoriaPartido } from './value-objects/partido-categoriapartido.value-object';
import { PartidoFechaPartido } from './value-objects/partido-fechapartido.value-object';
import { PartidoPabellonPartido } from './value-objects/partido-pabellonpartido.value-object';
import { PartidoArbitroPartido } from './value-objects/partido-arbitropartido.value-object';
import { PartidoResultadoPartido } from './value-objects/partido-resultadopartido.value-object';
import { PartidoGolesLocalPartido } from './value-objects/partido-goleslocalpartido.value-object';
import { PartidoGolesVisitantePartido } from './value-objects/partido-golesvisitantepartido.value-object';
import { PartidoCategoriaPartido } from './value-objects/partido-categoriapartido.value-object';

export class Partido extends Aggregate {
  constructor(  private readonly _equipolocalpartido: PartidoEquipoLocalPartido,
  private readonly _equipovisitantepartido: PartidoEquipoVisitantePartido,
  private readonly _categoriapartido: PartidoCategoriaPartido,
  private readonly _fechapartido: PartidoFechaPartido,
  private readonly _pabellonpartido: PartidoPabellonPartido,
  private readonly _arbitropartido: PartidoArbitroPartido,
  private readonly _resultadopartido: PartidoResultadoPartido,
  private readonly _goleslocalpartido: PartidoGolesLocalPartido,
  private readonly _golesvisitantepartido: PartidoGolesVisitantePartido,
  private readonly _categoriapartido: PartidoCategoriaPartido,
) {
    super();
  }
}