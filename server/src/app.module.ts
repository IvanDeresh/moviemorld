import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TicketModule } from './ticket/ticket.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/movie123'),
    NewsModule,
    UsersModule,
    TicketModule,
  ],
})
export class AppModule {}
