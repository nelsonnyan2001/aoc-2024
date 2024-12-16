import { readFileSync } from "node:fs";

const rawData = readFileSync("./test.txt", "utf8").toString().split("\n");

let safeCount = 0;

for (let i = 0; i < rawData.length - 1; i++) {
  const currLine = rawData[i].split(" ").map((i) => parseInt(i));

  let remCount = 0;
  let isIncreasing = currLine[0] < currLine[currLine.length - 1];
  let isSafe = true;

  if (currLine[0] === currLine[1]) {
    currLine.splice(0, 1);
    remCount += 1;
  }

  for (let j = 0; j < currLine.length - 1; j++) {
    if (remCount > 1) {
      isSafe = false;
      break;
    }

    if (isIncreasing) {
      if (currLine[j + 1] < currLine[j]) {
        remCount += 1;
        currLine.splice(j, 1);
        j = -1;
        continue;
      }
      if (
        currLine[j + 1] - currLine[j] < 1 ||
        currLine[j + 1] - currLine[j] > 3
      ) {
        remCount += 1;
        currLine.splice(j + 1, 1);
        j = -1;
        continue;
      }
    } else {
      if (
        currLine[j] - currLine[j + 1] < 1 ||
        currLine[j] - currLine[j + 1] > 3 ||
        currLine[j] < currLine[j + 1]
      ) {
        remCount += 1;
        currLine.splice(j + 1, 1);
        j = -1;
      }
    }
  }
  if (isSafe) {
    console.log(safeCount);
    console.log(currLine);
    safeCount += 1;
  }
}

console.log(safeCount);
