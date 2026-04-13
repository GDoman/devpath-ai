import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('api/status')
  getStatus() {
    return this.appService.getStatus();
  }

  @Post('api/learning-goal')
  createLearningGoal(@Body('goal') goal: string) {
    return this.appService.createLearningGoal(goal);
  }
}
