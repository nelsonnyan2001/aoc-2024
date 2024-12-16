import { left, right } from "./data.js";

const counts = (item) => {
  return right.filter((x) => x === item).length;
};

left.sort();
right.sort();
let curr = left[0];
let count = counts(curr);

for (let i = 0; i <= left.length - 1; i++) {
  if (curr === left[i]) {
    continue;
  }
  curr = left[i];
  count += curr * counts(curr);
}

console.log(count);
