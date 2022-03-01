import { binaryRandom, normalRandom } from 'renderer/utils';
import { IPerson, Sex } from './Person';

export interface IStudent extends IPerson {
  id: number;
}

export class StudentMangager {
  static total = 0;

  static create() {
    StudentMangager.total += 1;

    return {
      id: StudentMangager.total,
      age: 20,
      sex: binaryRandom() as Sex,
      intelligence: normalRandom(0, 10),
      personality: normalRandom(0, 10),
      charm: normalRandom(0, 10),
      willingness: normalRandom(0, 10),
    };
  }
}
