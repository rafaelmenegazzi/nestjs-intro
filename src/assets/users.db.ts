import { Role } from '../users/interfaces/roles.interface';

export default [
  {
    id: 1,
    name: 'admin',
    age: 30,
    password: 'password',
    role: Role.Admin,
  },
  {
    id: 2,
    name: 'jhon',
    age: 25,
    password: 'password',
    role: Role.User,
  },
  {
    id: 3,
    name: 'mary',
    age: 33,
    password: 'password',
    role: Role.User,
  },
];
