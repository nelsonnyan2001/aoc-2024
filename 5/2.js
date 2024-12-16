import fs from "node:fs";

const pages = fs.readFileSync("./pages.txt", "utf8").toString().split("\n");
pages.pop();
const rules = fs.readFileSync("./rules.txt", "utf8").toString().split("\n");
rules.pop();

const isValid = (data) => {
  let isValid = true;
  for (let i = 0; i <= data.length - 2; i++) {
    let pair = data[i] + "|" + data[i + 1];
    if (!rules.includes(pair)) {
      isValid = false;
    }
  }
  return isValid;
};

const sortFn = (a, b) => {
  if (rules.includes([a, b].join("|"))) {
    return -1;
  } else return 1;
};

let count = 0;

pages.forEach((item) => {
  const data = item.split(",");
  if (!isValid(data)) {
    count += parseInt(data.sort(sortFn)[data.length / 2 - 0.5]);
  }
});

console.log(count);
