import { Body, Controller, UseGuards, Get, Post, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketDto } from './dto/ticket-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Post('/your-tickets')
  createUserTicket(@Body() body: TicketDto) {
    return this.ticketService.create(body);
  }
  @Get('email')
  getUserTicket(@Query('email') email: string) {
    return this.ticketService.getByEmail(email);
  }
}
