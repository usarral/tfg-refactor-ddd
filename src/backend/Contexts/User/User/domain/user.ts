import { Aggregate } from '@shared/domain/aggregate';
import { UserRolUser } from './value-objects/user-roluser.value-object';
import { UserArbitroUser } from './value-objects/user-arbitrouser.value-object';
import { UserClubUser } from './value-objects/user-clubuser.value-object';
import { UserDNIUser } from './value-objects/user-dniuser.value-object';
import { UserNombreUser } from './value-objects/user-nombreuser.value-object';
import { UserEmailUser } from './value-objects/user-emailuser.value-object';
import { UserPasswordUser } from './value-objects/user-passworduser.value-object';
import { UserFingerprintUser } from './value-objects/user-fingerprintuser.value-object';
import { UserTokenUser } from './value-objects/user-tokenuser.value-object';

export class User extends Aggregate {
  constructor(  private readonly _roluser: UserRolUser,
  private readonly _arbitrouser: UserArbitroUser,
  private readonly _clubuser: UserClubUser,
  private readonly _dniuser: UserDNIUser,
  private readonly _nombreuser: UserNombreUser,
  private readonly _emailuser: UserEmailUser,
  private readonly _passworduser: UserPasswordUser,
  private readonly _fingerprintuser: UserFingerprintUser,
  private readonly _tokenuser: UserTokenUser,
) {
    super();
  }
}