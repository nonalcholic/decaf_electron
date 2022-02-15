function randn_bm(min: number, max: number) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = (num / 10.0) * 1.94 + 0.5; // Translate to 0 -> 1

  //   if (num > 1 || num < 0) num = randn_bm(min, max);
  //   resample between 0 and 1 if out of range
  //   else {
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  //   }
  return num;
}

let count = 0;
let count2 = 0;
for (let i = 0; i < 100000; i++) {
  let a = randn_bm(100, 200);
  if (a > 200) {
    // console.log(a);
    count++;
  }
  if (a < 100) count2++;
}
console.log(count, count2);
