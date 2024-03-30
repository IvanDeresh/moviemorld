import { Body, Controller, UseGuards, Get, Post, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketDto } from './dto/ticket-dto';
import { MailService } from './email.service';
@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    // private readonly emailService: MailService,
  ) {}

  @Post('/your-tickets')
  async createUserTicket(@Body() body: TicketDto) {
    // await this.emailService.sendTicket(body.email,body)
    return this.ticketService.create(body);
  }

  @Get('email')
  getUserTicket(@Query('email') email: string) {
    return this.ticketService.getByEmail(email);
  }
}
