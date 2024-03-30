import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './ticket.schema';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from '../../mailer.config';
import { MailService } from './email.service';
@Module({
  imports: [
    // MailerModule.forRoot(mailerConfig),
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
