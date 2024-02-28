import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NewsModule],
})
export class AppModule {}
