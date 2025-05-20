import { Aggregate } from '@shared/domain/aggregate';
import { ClubNombreClub } from './value-objects/club-nombreclub.value-object';
import { ClubNIFClub } from './value-objects/club-nifclub.value-object';
import { ClubDireccionClub } from './value-objects/club-direccionclub.value-object';
import { ClubCiudadClub } from './value-objects/club-ciudadclub.value-object';
import { ClubProvinciaClub } from './value-objects/club-provinciaclub.value-object';
import { ClubCPClub } from './value-objects/club-cpclub.value-object';
import { ClubTelefonoClub } from './value-objects/club-telefonoclub.value-object';
import { ClubEmailClub } from './value-objects/club-emailclub.value-object';
import { ClubWebClub } from './value-objects/club-webclub.value-object';
import { ClubEscudoClub } from './value-objects/club-escudoclub.value-object';
import { ClubFechaAltaClub } from './value-objects/club-fechaaltaclub.value-object';
import { ClubFechaBajaClub } from './value-objects/club-fechabajaclub.value-object';
import { ClubResponsableClub } from './value-objects/club-responsableclub.value-object';
import { ClubEquiposClub } from './value-objects/club-equiposclub.value-object';

export class Club extends Aggregate {
  constructor(  private readonly _nombreclub: ClubNombreClub,
  private readonly _nifclub: ClubNIFClub,
  private readonly _direccionclub: ClubDireccionClub,
  private readonly _ciudadclub: ClubCiudadClub,
  private readonly _provinciaclub: ClubProvinciaClub,
  private readonly _cpclub: ClubCPClub,
  private readonly _telefonoclub: ClubTelefonoClub,
  private readonly _emailclub: ClubEmailClub,
  private readonly _webclub: ClubWebClub,
  private readonly _escudoclub: ClubEscudoClub,
  private readonly _fechaaltaclub: ClubFechaAltaClub,
  private readonly _fechabajaclub: ClubFechaBajaClub,
  private readonly _responsableclub: ClubResponsableClub,
  private readonly _equiposclub: ClubEquiposClub,
) {
    super();
  }
}