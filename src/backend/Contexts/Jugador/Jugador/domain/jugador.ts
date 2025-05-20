import { Aggregate } from '@shared/domain/aggregate';
import { JugadorNombreJugador } from './value-objects/jugador-nombrejugador.value-object';
import { JugadorApellidoJugador } from './value-objects/jugador-apellidojugador.value-object';
import { JugadorApellido2Jugador } from './value-objects/jugador-apellido2jugador.value-object';
import { JugadorDniJugador } from './value-objects/jugador-dnijugador.value-object';
import { JugadorTelefonoJugador } from './value-objects/jugador-telefonojugador.value-object';
import { JugadorEmailJugador } from './value-objects/jugador-emailjugador.value-object';
import { JugadorDireccionJugador } from './value-objects/jugador-direccionjugador.value-object';
import { JugadorCiudadJugador } from './value-objects/jugador-ciudadjugador.value-object';
import { JugadorProvinciaJugador } from './value-objects/jugador-provinciajugador.value-object';
import { JugadorCPJugador } from './value-objects/jugador-cpjugador.value-object';
import { JugadorFechaNacimientoJugador } from './value-objects/jugador-fechanacimientojugador.value-object';
import { JugadorFotoJugador } from './value-objects/jugador-fotojugador.value-object';
import { JugadorCategoriaJugador } from './value-objects/jugador-categoriajugador.value-object';
import { JugadorClubJugador } from './value-objects/jugador-clubjugador.value-object';
import { JugadorEquipoJugador } from './value-objects/jugador-equipojugador.value-object';

export class Jugador extends Aggregate {
  constructor(  private readonly _nombrejugador: JugadorNombreJugador,
  private readonly _apellidojugador: JugadorApellidoJugador,
  private readonly _apellido2jugador: JugadorApellido2Jugador,
  private readonly _dnijugador: JugadorDniJugador,
  private readonly _telefonojugador: JugadorTelefonoJugador,
  private readonly _emailjugador: JugadorEmailJugador,
  private readonly _direccionjugador: JugadorDireccionJugador,
  private readonly _ciudadjugador: JugadorCiudadJugador,
  private readonly _provinciajugador: JugadorProvinciaJugador,
  private readonly _cpjugador: JugadorCPJugador,
  private readonly _fechanacimientojugador: JugadorFechaNacimientoJugador,
  private readonly _fotojugador: JugadorFotoJugador,
  private readonly _categoriajugador: JugadorCategoriaJugador,
  private readonly _clubjugador: JugadorClubJugador,
  private readonly _equipojugador: JugadorEquipoJugador,
) {
    super();
  }
}