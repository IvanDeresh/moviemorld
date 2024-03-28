import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { MovieNewsDto } from './dtos/user.dto';
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('/create-news')
  create(@Body() news: any) {
    return this.newsService.create(news);
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }
  // @Post('/addAll')
  // addAll() {
  //   return this.newsService.addAll();
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(parseInt(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(parseInt(id));
  }
  @Patch('/:id')
  async update(@Param('id') id: string, attrs: Partial<MovieNewsDto>) {
    return this.newsService.update(parseInt(id), attrs);
  }
}
