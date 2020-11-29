import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Login } from './interfaces/login.interface';
import { Signup } from './interfaces/signup.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() login: Login) {
    return this.authService.validateUser(login);
  }

  @Post('signup')
  signup(@Body() signup: Signup) {
    return this.authService.registerUser(signup);
  }
}
