import { normalRandom, binaryRandom } from 'renderer/utils/random';
import { Sex, Person } from './Person';

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
