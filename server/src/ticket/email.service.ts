import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendTicket(to: string, body: any): Promise<void> {
    await this.mailerService.sendMail({
      to: to,
      subject: 'Ticket from movieworld',
      html: `
        <div>
          tour ticket ${body}
        </div>
      `,
    });
  }
}
