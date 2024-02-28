import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News, NewsModel } from './schemas/news.schema';
@Injectable()
export class NewsService {
  create(createNewsDto: CreateNewsDto) {
    return 'This action adds a new news';
  }

  findAll() {
    return NewsModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} news`;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return;
  }
}
