import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!  nest.js v7 阿里云函数部署' + Date.now();
  }
}
