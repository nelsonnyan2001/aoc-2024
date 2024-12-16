import { readFileSync } from "node:fs";

function isSafe(report) {
  let isDecreasing = false;
  if (report.length >= 2) {
    isDecreasing = report[0] > report[1];
  }
  let safe = true;
  for (let i = 1; i < report.length; i++) {
    if (isDecreasing) {
      if (report[i - 1] <= report[i] || report[i - 1] - report[i] > 3) {
        safe = false;
        break;
      }
    } else {
      if (report[i - 1] >= report[i] || report[i] - report[i - 1] > 3) {
        safe = false;
        break;
      }
    }
  }
  return safe;
}

const rawData = readFileSync("./test.txt", "utf8").toString().split("\n");
rawData.pop();

const reports = [];
for (const line of rawData) {
  reports.push(line.split(/\s+/g).map((i) => parseInt(i)));
}

let safe = 0;
for (const report of reports) {
  if (isSafe(report)) {
    console.log(report);
    console.log(safe);
    safe++;
    continue;
  }
  for (let i = 0; i < report.length; i++) {
    const subReport = report.slice();
    subReport.splice(i, 1);
    if (isSafe(subReport)) {
      console.log(report);
      console.log(safe);
      safe++;
      break;
    }
  }
}

console.log(safe);
