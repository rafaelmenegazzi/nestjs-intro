import { Role } from './roles.interface';

export interface User {
  id: number;
  name: string;
  age: number;
  password: string;
  role: Role;
}
