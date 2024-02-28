import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { movieNewsData } from './news/data/index';
import * as cookieParser from 'cookie-parser';

import mongoose from 'mongoose';
import { NewsModel } from './news/schemas/news.schema';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(cookieParser());
  try {
    await mongoose.connect('mongodb://localhost:27017/movieworld');
    await app.listen(3003);
    console.log('Nest application started successfully.');
  } catch (error) {
    console.error('Error starting Nest application:', error);
  }
}

bootstrap();
