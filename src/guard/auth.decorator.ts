import { applyDecorators, UseGuards } from '@nestjs/common';

import { AuthenticationGuard } from './authentication.guard';
import { RolesGuard } from './roles.guard';

export function Auth() {
  return applyDecorators(UseGuards(AuthenticationGuard, RolesGuard));
}
