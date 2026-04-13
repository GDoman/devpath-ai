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
}
