import { normalRandom } from '../utils/random';

export class Student {
  intelligence: number; // 지성

  personality: number; // 인성

  charm: number; // 매력

  willingness: number; // 의지

  luck: number; // 운 ()

  sex: number; // 성별 (0: male, 1: female)

  knowledge: number; // 지식

  happiness: number; // 행복

  credit: number; // 학점

  // papers: number; // 논문 수

  constructor() {
    this.intelligence = normalRandom();
    this.personality = normalRandom();
    this.charm = normalRandom();
    this.willingness = normalRandom();
    this.luck = normalRandom();
    this.sex = normalRandom();
    this.knowledge = normalRandom();
    this.happiness = normalRandom();
    this.credit = normalRandom();
  }
}
