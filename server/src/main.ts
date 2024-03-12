import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { movieNewsData } from './news/data/index';
import * as cookieParser from 'cookie-parser';

import mongoose from 'mongoose';
import { NewsModel } from './news/schemas/news.schema';
import * as cors from 'cors';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(cookieParser());
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  const PORT = 3003 || 3005;

  try {
    await mongoose.connect('mongodb://localhost:27017/movieworld');
    await app.listen(PORT);
    console.log(
      `Nest application started successfully. http://localhost:${PORT}`,
    );
  } catch (error) {
    console.error('Error starting Nest application:', error);
  }
}

bootstrap();
