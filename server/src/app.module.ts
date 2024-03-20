import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    NewsModule,
    MongooseModule.forRoot(
      'mongodb+srv://ivandereshwork:7XeIyMusS9d6monx@cluster0.10gt65k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
  ],
})
export class AppModule {}
