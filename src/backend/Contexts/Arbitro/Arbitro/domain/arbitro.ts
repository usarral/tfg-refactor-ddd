import { Aggregate } from '@shared/domain/aggregate';
import { ArbitroNombreArbitro } from './value-objects/arbitro-nombrearbitro.value-object';
import { ArbitroApellidoArbitro } from './value-objects/arbitro-apellidoarbitro.value-object';
import { ArbitroApellido2Arbitro } from './value-objects/arbitro-apellido2arbitro.value-object';
import { ArbitroFechaNacimientoArbitro } from './value-objects/arbitro-fechanacimientoarbitro.value-object';
import { ArbitroDNIArbitro } from './value-objects/arbitro-dniarbitro.value-object';
import { ArbitroTelefonoArbitro } from './value-objects/arbitro-telefonoarbitro.value-object';
import { ArbitroEmailArbitro } from './value-objects/arbitro-emailarbitro.value-object';
import { ArbitroDireccionArbitro } from './value-objects/arbitro-direccionarbitro.value-object';
import { ArbitroCiudadArbitro } from './value-objects/arbitro-ciudadarbitro.value-object';
import { ArbitroProvinciaArbitro } from './value-objects/arbitro-provinciaarbitro.value-object';
import { ArbitroCPArbitro } from './value-objects/arbitro-cparbitro.value-object';
import { ArbitroFotoArbitro } from './value-objects/arbitro-fotoarbitro.value-object';
import { ArbitroPartidosArbitrados } from './value-objects/arbitro-partidosarbitrados.value-object';
import { ArbitroFechaAltaArbitro } from './value-objects/arbitro-fechaaltaarbitro.value-object';
import { ArbitroFechaBajaArbitro } from './value-objects/arbitro-fechabajaarbitro.value-object';
import { ArbitroEstadoArbitro } from './value-objects/arbitro-estadoarbitro.value-object';

export class Arbitro extends Aggregate {
  constructor(  private readonly _nombrearbitro: ArbitroNombreArbitro,
  private readonly _apellidoarbitro: ArbitroApellidoArbitro,
  private readonly _apellido2arbitro: ArbitroApellido2Arbitro,
  private readonly _fechanacimientoarbitro: ArbitroFechaNacimientoArbitro,
  private readonly _dniarbitro: ArbitroDNIArbitro,
  private readonly _telefonoarbitro: ArbitroTelefonoArbitro,
  private readonly _emailarbitro: ArbitroEmailArbitro,
  private readonly _direccionarbitro: ArbitroDireccionArbitro,
  private readonly _ciudadarbitro: ArbitroCiudadArbitro,
  private readonly _provinciaarbitro: ArbitroProvinciaArbitro,
  private readonly _cparbitro: ArbitroCPArbitro,
  private readonly _fotoarbitro: ArbitroFotoArbitro,
  private readonly _partidosarbitrados: ArbitroPartidosArbitrados,
  private readonly _fechaaltaarbitro: ArbitroFechaAltaArbitro,
  private readonly _fechabajaarbitro: ArbitroFechaBajaArbitro,
  private readonly _estadoarbitro: ArbitroEstadoArbitro,
) {
    super();
  }
}