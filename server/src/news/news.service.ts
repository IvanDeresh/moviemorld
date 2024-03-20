import { Injectable, NotFoundException } from '@nestjs/common';
import { News, NewsModel } from './schemas/news.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieNewsDto } from './dtos/user.dto';
@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly userModel: Model<News>,
  ) {}
  async create(createNewsDto: any) {
    const news = await this.userModel.create({ ...createNewsDto });
    return news.save();
  }
  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: number) {
    return await this.userModel.findOne({ id });
  }

  async update(id: number, attrs: Partial<MovieNewsDto>) {
    const news = await this.userModel.findOne({ id });
    if (!news) {
      throw new NotFoundException('News not found');
    }
    Object.assign(news, attrs);
    return news.save();
  }

  remove(id: number) {
    return this.userModel.deleteOne({ id });
  }
}
