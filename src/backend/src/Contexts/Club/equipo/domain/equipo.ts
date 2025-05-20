import { Aggregate } from '@shared/domain/aggregate';
import { EquipoNombreEquipo } from './value-objects/equipo-nombreequipo.value-object';
import { EquipoCategoriaEquipo } from './value-objects/equipo-categoriaequipo.value-object';
import { EquipoResponsableEquipo } from './value-objects/equipo-responsableequipo.value-object';
import { EquipoEmailEquipo } from './value-objects/equipo-emailequipo.value-object';
import { EquipoTelefonoEquipo } from './value-objects/equipo-telefonoequipo.value-object';
import { EquipoDireccionEquipo } from './value-objects/equipo-direccionequipo.value-object';
import { EquipoCiudadEquipo } from './value-objects/equipo-ciudadequipo.value-object';
import { EquipoProvinciaEquipo } from './value-objects/equipo-provinciaequipo.value-object';
import { EquipoCPEquipo } from './value-objects/equipo-cpequipo.value-object';
import { EquipoEscudoEquipo } from './value-objects/equipo-escudoequipo.value-object';
import { EquipoClubEquipo } from './value-objects/equipo-clubequipo.value-object';
import { EquipoJugadoresEquipo } from './value-objects/equipo-jugadoresequipo.value-object';
import { EquipoStaffEquipo } from './value-objects/equipo-staffequipo.value-object';
import { EquipoPartidosEquipo } from './value-objects/equipo-partidosequipo.value-object';
import { EquipoFechaAltaEquipo } from './value-objects/equipo-fechaaltaequipo.value-object';
import { EquipoFechaBajaEquipo } from './value-objects/equipo-fechabajaequipo.value-object';

export class Equipo extends Aggregate {
  constructor(  private readonly _nombreequipo: EquipoNombreEquipo,
  private readonly _categoriaequipo: EquipoCategoriaEquipo,
  private readonly _responsableequipo: EquipoResponsableEquipo,
  private readonly _emailequipo: EquipoEmailEquipo,
  private readonly _telefonoequipo: EquipoTelefonoEquipo,
  private readonly _direccionequipo: EquipoDireccionEquipo,
  private readonly _ciudadequipo: EquipoCiudadEquipo,
  private readonly _provinciaequipo: EquipoProvinciaEquipo,
  private readonly _cpequipo: EquipoCPEquipo,
  private readonly _escudoequipo: EquipoEscudoEquipo,
  private readonly _clubequipo: EquipoClubEquipo,
  private readonly _jugadoresequipo: EquipoJugadoresEquipo,
  private readonly _staffequipo: EquipoStaffEquipo,
  private readonly _partidosequipo: EquipoPartidosEquipo,
  private readonly _fechaaltaequipo: EquipoFechaAltaEquipo,
  private readonly _fechabajaequipo: EquipoFechaBajaEquipo,
) {
    super();
  }
}