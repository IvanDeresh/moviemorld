// movie-news.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class MovieNewsDto {
  @IsString()
  date: Date;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  author: string;

  @IsNumber()
  id: number;
}

