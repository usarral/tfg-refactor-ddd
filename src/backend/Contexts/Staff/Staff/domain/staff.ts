import { Aggregate } from '@shared/domain/aggregate';
import { StaffNombreStaff } from './value-objects/staff-nombrestaff.value-object';
import { StaffApellidoStaff } from './value-objects/staff-apellidostaff.value-object';
import { StaffApellido2Staff } from './value-objects/staff-apellido2staff.value-object';
import { StaffDniStaff } from './value-objects/staff-dnistaff.value-object';
import { StaffTelefonoStaff } from './value-objects/staff-telefonostaff.value-object';
import { StaffEmailStaff } from './value-objects/staff-emailstaff.value-object';
import { StaffDireccionStaff } from './value-objects/staff-direccionstaff.value-object';
import { StaffCiudadStaff } from './value-objects/staff-ciudadstaff.value-object';
import { StaffProvinciaStaff } from './value-objects/staff-provinciastaff.value-object';
import { StaffCPStaff } from './value-objects/staff-cpstaff.value-object';
import { StaffFechaNacimientoStaff } from './value-objects/staff-fechanacimientostaff.value-object';
import { StaffCargoStaff } from './value-objects/staff-cargostaff.value-object';
import { StaffClubStaff } from './value-objects/staff-clubstaff.value-object';
import { StaffEquipoStaff } from './value-objects/staff-equipostaff.value-object';
import { StaffEstadoStaff } from './value-objects/staff-estadostaff.value-object';
import { StaffFotoStaff } from './value-objects/staff-fotostaff.value-object';

export class Staff extends Aggregate {
  constructor(  private readonly _nombrestaff: StaffNombreStaff,
  private readonly _apellidostaff: StaffApellidoStaff,
  private readonly _apellido2staff: StaffApellido2Staff,
  private readonly _dnistaff: StaffDniStaff,
  private readonly _telefonostaff: StaffTelefonoStaff,
  private readonly _emailstaff: StaffEmailStaff,
  private readonly _direccionstaff: StaffDireccionStaff,
  private readonly _ciudadstaff: StaffCiudadStaff,
  private readonly _provinciastaff: StaffProvinciaStaff,
  private readonly _cpstaff: StaffCPStaff,
  private readonly _fechanacimientostaff: StaffFechaNacimientoStaff,
  private readonly _cargostaff: StaffCargoStaff,
  private readonly _clubstaff: StaffClubStaff,
  private readonly _equipostaff: StaffEquipoStaff,
  private readonly _estadostaff: StaffEstadoStaff,
  private readonly _fotostaff: StaffFotoStaff,
) {
    super();
  }
}