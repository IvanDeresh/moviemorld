import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
} from 'class-validator';

export class TicketDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  title: string;

  @IsBoolean()
  payment: boolean;

  @IsString()
  time: string;

  @IsArray()
  numberSeat: number[];
}
