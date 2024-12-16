import fs from "node:fs";

const regex = new RegExp(/mul\(\d+,\d+\)/g);

const data = fs.readFileSync("./testStr.txt", "utf8");

const matches = [...data.matchAll(regex)];

const paranRegex = new RegExp(/(?<=\()(.*?)(?=\))/);

const uncleaned = matches.map((item) => {
  return item[0].match(paranRegex)[0];
});

const cleaned = uncleaned.map((item) => {
  return item.split(",");
});

const sanitized = cleaned.filter((item) => {
  return !isNaN(item[0]) && !isNaN(item[1]);
});

let ans = 0;

sanitized.forEach((item) => {
  ans += item[0] * item[1];
});

console.log(ans);
