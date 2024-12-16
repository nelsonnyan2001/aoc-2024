import fs from "node:fs";

const a = fs.readFileSync("./input.txt", "utf8").toString().split("\n");
const data = a.map((item) => item.split(""));

let count = 0;

data.forEach((_, vertIdx) => {
  data[vertIdx].forEach((_, horzIdx) => {
    if (vertIdx >= 1 && horzIdx >= 1) {
      if (data[vertIdx][horzIdx] === "A") {
        if (
          data[vertIdx - 1][horzIdx - 1] === "M" &&
          data[vertIdx - 1][horzIdx + 1] === "S" &&
          data[vertIdx + 1][horzIdx - 1] === "M" &&
          data[vertIdx + 1][horzIdx + 1] === "S"
        ) {
          count += 1;
        }

        if (
          data[vertIdx - 1][horzIdx - 1] === "S" &&
          data[vertIdx - 1][horzIdx + 1] === "S" &&
          data[vertIdx + 1][horzIdx - 1] === "M" &&
          data[vertIdx + 1][horzIdx + 1] === "M"
        ) {
          count += 1;
        }

        if (
          data[vertIdx - 1][horzIdx - 1] === "M" &&
          data[vertIdx - 1][horzIdx + 1] === "M" &&
          data[vertIdx + 1][horzIdx - 1] === "S" &&
          data[vertIdx + 1][horzIdx + 1] === "S"
        ) {
          count += 1;
        }

        if (
          data[vertIdx - 1][horzIdx - 1] === "S" &&
          data[vertIdx - 1][horzIdx + 1] === "M" &&
          data[vertIdx + 1][horzIdx - 1] === "S" &&
          data[vertIdx + 1][horzIdx + 1] === "M"
        ) {
          count += 1;
        }
      }
    }
  });
});
console.log(count);
