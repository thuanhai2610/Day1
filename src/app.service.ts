import { Injectable } from '@nestjs/common';
import { Score } from './score.service';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!!';
  }
  // function Union
  UnionType(value: string | number) { 
    if (typeof value === 'number') {
      return 'Value of number is ' + value;
    } else {
      return 'Value of String is ' + value;
    }
  }
  // class Generic & Decorator
  private scoreStorage = new Score<number>();
  addScore(score: number): string {
    if (score < 0 || score > 10) {
      return 'Invalid score! Please enter a value between 0 and 10.';
    }
    this.scoreStorage.addScore(score);
    return `Added score: ${score}`;
  }

  getScores(): number[] {
    return this.scoreStorage.getScores();
  }
}






