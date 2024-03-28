import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type NewsDocument = News & Document;

@Schema()
export class News {
  @Prop({ default: '00:00' })
  date: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true, unique: true })
  id: number;
}

export const NewsSchema = SchemaFactory.createForClass(News);
export const NewsModel = mongoose.model('News', NewsSchema);
