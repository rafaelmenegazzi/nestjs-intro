import { BadRequestException, Injectable } from '@nestjs/common';

import { Login } from './interfaces/login.interface';
import { Signup } from './interfaces/signup.interface';
import { UsersService } from '../users/users.service';
import { Role } from '../users/interfaces/roles.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  registerUser(user: Signup): number {
    return this.userService.create({ ...user, role: Role.User });
  }

  validateUser(credentials: Login): { auth: string } {
    const user = this.userService.findByName(credentials.username);
    if (user && user.password === credentials.password) {
      return { auth: 'usersSecretToken' };
    }
    throw new BadRequestException('Invalid Credentials');
  }
}
