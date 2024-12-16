import fs from "node:fs";

const data = fs.readFileSync("./testStr.txt", "utf8");
const memory = data.toString().replace(/\r/g, "").trimEnd();

const regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;

const matches = memory.matchAll(regex);

const instructions = [];

for (const match of matches) {
  if (match[0].includes("mul")) {
    instructions.push(match[0].slice(4, -1).split(","));
  } else {
    instructions.push(match[0]);
  }
}

let addEnabled = true;
const result = instructions.reduce((acc, instr) => {
  if (typeof instr !== "string" && addEnabled) {
    return (acc += instr[0] * instr[1]);
  } else if (instr === "do()") {
    addEnabled = true;
    return acc;
  } else if (instr === "don't()") {
    addEnabled = false;
    return acc;
  } else {
    return acc;
  }
}, 0);

console.log(result);
