import mongoose, { Document, Schema } from 'mongoose';

interface INews extends Document {
  date: Date;
  title: string;
  description: string;
  image: string;
  author: string;
  category: string;
  id: number;
  tags: string[];
}

const NewsSchema: Schema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const News = mongoose.model<INews>('News', NewsSchema);

export default News;
