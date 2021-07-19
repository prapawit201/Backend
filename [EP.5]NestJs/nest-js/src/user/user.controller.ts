import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  postTodo(
    @Body('fullName') fullName: string,
    @Body('birthday') birthday: string,
  ) {
    this.userService.postUser(fullName, birthday);
  }
}
