import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ticket extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  payment: boolean;
  @Prop({ required: true })
  time: string;
  @Prop({ required: true })
  numberSeat: number[];
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
export type TicketDocument = Ticket & Document;
