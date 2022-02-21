// const TRUST_95 = 2.55

import { randnBm } from '../../../_test';

// const TRUST_99 = 1.94
export function normalRandom(min = 0, max = 1) {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = (num / 10.0) * 1.94 + 0.5; // Translate to 0 -> 1

  if (num > 1 || num < 0) num = randnBm(min, max);
  //   resample between 0 and 1 if out of range
  else {
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
  }
  return num;
}

export function binaryRandom(): number {
  const threshold = Math.random();
  return threshold < 0.5 ? 0 : 1;
}
