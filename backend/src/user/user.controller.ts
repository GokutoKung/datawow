import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('validate')
  async validateUser(@Body() credentials: { email: string, password: string }) {
    return this.userService.validateUser(credentials.email, credentials.password);
  }
}