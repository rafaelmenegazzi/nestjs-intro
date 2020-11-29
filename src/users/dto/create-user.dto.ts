import { IsEnum, IsNotEmpty } from 'class-validator';

import { Role } from '../interfaces/roles.interface';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  password: string;

  @IsEnum(Role)
  role: Role;
}
