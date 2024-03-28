import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.shema';
import { CreateUserDto } from './dtos/user-create.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.userModel.findOne({ id });
  }
  async find(email: string) {
    return await this.userModel.findOne({ email });
  }
}
