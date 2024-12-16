import fs from "node:fs";

const pages = fs.readFileSync("./pages.txt", "utf8").toString().split("\n");
pages.pop();
const rules = fs.readFileSync("./rules.txt", "utf8").toString().split("\n");
rules.pop();

let count = 0;
pages.forEach((item) => {
  const data = item.split(",");
  let isValid = true;
  for (let i = 0; i <= data.length - 2; i++) {
    let pair = data[i] + "|" + data[i + 1];
    if (!rules.includes(pair)) {
      isValid = false;
    }
    if (isValid && i === data.length - 2) {
      count += parseInt(data[data.length / 2 - 0.5]);
    }
  }
});
console.log(count);
