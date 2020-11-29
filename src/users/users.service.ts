import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/users.interface';
import mockedUsers from '../assets/users.db';

@Injectable()
export class UsersService {
  private readonly users: User[] = mockedUsers;

  create(user: CreateUserDto) {
    const id = Date.now();
    this.users.push({ id, ...user });
    return id;
  }

  findAll(): User[] {
    return this.users;
  }

  async findAllDelay(): Promise<User[]> {
    console.log('aki');
    await new Promise((r) => setTimeout(r, 10000));
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((u) => u.id === id);
  }

  findByName(name: string): User {
    return this.users.find((u) => u.name === name);
  }
}
