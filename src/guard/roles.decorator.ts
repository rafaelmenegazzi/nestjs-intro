import { SetMetadata } from '@nestjs/common';

import { Role } from '../users/interfaces/roles.interface';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
