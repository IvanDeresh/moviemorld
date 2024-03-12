import { Injectable } from '@nestjs/common';
import { User } from '../users/users.shema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user: User = await this.userService.findOne(username);
    if (user && user.password === password) {
      const { password, ...rest } = user.toObject(); // Видалення пароля з об'єкта користувача
      return rest;
    }
    return null;
  }

  async login(username: string, password: string, email: string) {
    return { username, password };
  }

  getHello() {
    return 'Hello';
  }
}
