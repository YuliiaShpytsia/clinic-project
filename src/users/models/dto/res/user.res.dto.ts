import { UserRole } from '../../enums/role.enum';

export class UserResDto {
  name: string;
  age: number;
  email: string;
  password: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
}
