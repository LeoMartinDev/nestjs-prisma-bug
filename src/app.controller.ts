import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.user.findUnique({
      where: { email: 'ok' },
    });
  }
}
