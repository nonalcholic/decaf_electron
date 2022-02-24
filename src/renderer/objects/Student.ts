import { normalRandom, binaryRandom } from 'renderer/utils/random';
import { Sex, Person } from './Person';

// FIXME: Student 클래스가 더이상 필요하지 않음
export class Student extends Person {
  constructor() {
    super({
      age: 20,
      sex: binaryRandom() as Sex,
      intelligence: normalRandom(0, 10),
      personality: normalRandom(0, 10),
      charm: normalRandom(0, 10),
      willingness: normalRandom(0, 10),
    });
  }
}
