import { UserRole } from '../../enums/role.enum';

export class CreateUserReqDto {
  readonly name: string;
  readonly age: number;
  readonly email: string;
  readonly password: string;
  readonly role: UserRole;
}
