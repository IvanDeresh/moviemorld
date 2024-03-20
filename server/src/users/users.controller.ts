import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/user-create.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/create')
  async signup(@Body() body: CreateUserDto) {
    const user = await this.userService.create(body);
    return user;
  }
  @Post('/addNewUser')
  async addNewUser(@Body() body: CreateUserDto) {
    const user = await this.userService.find(body.email);
    if (!user) {
      return this.userService.create(body);
    }
  }
  @Post('/login')
  async login(@Body() body: CreateUserDto) {
    const user = await this.userService.find(body.email);
    if (!user) {
      throw new NotFoundException(`User ${body.email} not found`);
    }
    if (user.password != body.password) {
      throw new NotFoundException('incorrect password');
    }
    return user;
  }

  @Get('/find')
  async find(@Query('email') email: string) {
    const user = await this.userService.find(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get('/findAll')
  async findAll() {
    const users = await this.userService.findAll();
    return users;
  }
}
