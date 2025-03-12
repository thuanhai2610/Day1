import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // function Union
  @Get('union/:value')
  UnionType(@Param('value') value: string) {
    return this.appService.UnionType(isNaN(+value) ? value : +value);
  }

  // class Generic & Decorator
  @Post('add')
  addScore(@Body('score') score: number): string {
    return this.appService.addScore(score);
  }

  @Get('get')
  getScores(): number[] {
    return this.appService.getScores();
  }
}
