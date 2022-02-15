import { normalRandom, binaryRandom } from 'renderer/utils/random';
import { Sex, Person } from './Person';

export class Student extends Person {
  constructor() {
    super({
      age: 20,
      sex: binaryRandom() as Sex,
      intelligence: normalRandom(),
      personality: normalRandom(),
      charm: normalRandom(),
      willingness: normalRandom(),
    });
  }
}
