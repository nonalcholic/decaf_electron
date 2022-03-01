import { binaryRandom, normalRandom } from 'renderer/utils';
import { IPerson, Sex } from './Person';

export interface IStudent extends IPerson {
  id: number;
  status: StudentStatus;
  majorId: number;
  knowledge: number;
  credits: number;
}

export enum StudentStatus {
  Attending = 1, // 재학
  Resting, // 휴학
  Dropped, // 자퇴
  Graduated, // 졸업
}
export class StudentMangager {
  static total = 0;

  static create(): IStudent {
    StudentMangager.total += 1;

    return {
      id: StudentMangager.total,
      status: StudentStatus.Attending,
      majorId: 0,
      knowledge: 0,
      credits: 0,
      age: 20,
      sex: binaryRandom() as Sex,
      intelligence: normalRandom(30, 70),
      personality: normalRandom(30, 70),
      charm: normalRandom(30, 70),
      willingness: normalRandom(30, 70),
      healthy: normalRandom(30, 70),
      happiness: normalRandom(30, 70),
    };
  }
}
