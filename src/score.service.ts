import { Injectable } from '@nestjs/common';

@Injectable()
export class Score<T> {
  private scores: T[] = [];

  addScore(score: T): void {
    this.scores.push(score);
  }

  getScores(): T[] {
    return this.scores;
  }
}
