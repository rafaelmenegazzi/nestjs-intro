import { Controller, Get, Param } from '@nestjs/common';

import { Role } from './interfaces/roles.interface';
import { UsersService } from './users.service';
import { Roles } from '../guard/roles.decorator';
import { Auth } from '../guard/auth.decorator';

@Controller('users')
@Auth()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('delay')
  @Roles(Role.Admin)
  async findAllDelay() {
    return this.usersService.findAllDelay();
  }

  @Get(':id')
  get(@Param() params) {
    return this.usersService.findById(Number(params.id));
  }
}
