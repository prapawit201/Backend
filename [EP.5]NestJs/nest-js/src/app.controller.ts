import { Controller, Get, Param, HttpCode, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/bye')
  getBye(): string {
    return this.appService.getBye();
  }
  @Get('/get/:id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  @Get('ab*cd')
  @HttpCode(204)
  @Redirect('https://nestjs.com', 301)
  findAll() {
    return 'This route uses a wildcard';
  }
}
