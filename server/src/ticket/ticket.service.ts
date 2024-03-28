import { Injectable } from '@nestjs/common';
import { TicketDto } from './dto/ticket-dto';
import { Ticket } from './ticket.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>,
  ) {}
  create(ticket: TicketDto) {
    return this.ticketModel.create(ticket);
  }
  getByEmail(email: string) {
    return this.ticketModel.find({ email: email });
  }
}
