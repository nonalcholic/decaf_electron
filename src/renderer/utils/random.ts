// FIXME: 원하는 평균과 표준편차, 그리고 최댓값/최솟값을 받아서 결과를 내도록 바꾸기
export function normalRandom(): number {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return normalRandom(); // resample between 0 and 1
  return num;
}

export function binaryRandom(): number {
  const threshold = Math.random();
  return threshold < 0.5 ? 0 : 1;
}
