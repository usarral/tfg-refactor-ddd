import { Aggregate } from '@shared/domain/aggregate';
import { PabellonNombrePabellon } from './value-objects/pabellon-nombrepabellon.value-object';
import { PabellonDireccionPabellon } from './value-objects/pabellon-direccionpabellon.value-object';
import { PabellonCiudadPabellon } from './value-objects/pabellon-ciudadpabellon.value-object';
import { PabellonProvinciaPabellon } from './value-objects/pabellon-provinciapabellon.value-object';
import { PabellonCPPabellon } from './value-objects/pabellon-cppabellon.value-object';
import { PabellonTelefonoPabellon } from './value-objects/pabellon-telefonopabellon.value-object';
import { PabellonEmailPabellon } from './value-objects/pabellon-emailpabellon.value-object';
import { PabellonPartidosPabellon } from './value-objects/pabellon-partidospabellon.value-object';

export class Pabellon extends Aggregate {
  constructor(  private readonly _nombrepabellon: PabellonNombrePabellon,
  private readonly _direccionpabellon: PabellonDireccionPabellon,
  private readonly _ciudadpabellon: PabellonCiudadPabellon,
  private readonly _provinciapabellon: PabellonProvinciaPabellon,
  private readonly _cppabellon: PabellonCPPabellon,
  private readonly _telefonopabellon: PabellonTelefonoPabellon,
  private readonly _emailpabellon: PabellonEmailPabellon,
  private readonly _partidospabellon: PabellonPartidosPabellon,
) {
    super();
  }
}