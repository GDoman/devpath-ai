import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello from the DevPath AI backend!',
    };
  }

  getStatus() {
    return {
      status: 'ok',
      app: 'DevPath AI',
      timestamp: new Date().toISOString(),
    };
  }

  createLearningGoal(goal: string) {
    return {
      originalInput: goal,
      summary: `You want to learn: ${goal}`,
      nextStep: 'Break this goal into one small task you can complete today.',
    };
  }
}
