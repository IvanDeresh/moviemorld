import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as session from 'express-session';
import * as passport from 'passport';
import { ConfigService } from '@nestjs/config';

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

  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');

  try {
    await app.listen(3003 || 3005);
    console.log(`Nest application started successfully. http://localhost:3003`);
  } catch (error) {
    console.error('Error starting Nest application:', error);
  }
}

bootstrap();
