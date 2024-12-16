import fs from "node:fs";

const a = fs.readFileSync("./input.txt", "utf8").toString().split("\n");
const data = a.map((item) => item.split(""));

const values = {
  horizontalLR: 0,
  horizontalRL: 0,
  verticalTB: 0,
  verticalBT: 0,
  diagonalTLtoBR: 0,
  diagonalBRtoTL: 0,
  diagonalTRtoBL: 0,
  diagonalBLtoTR: 0,
};

data.forEach((item, itemIdx) => {
  item.forEach((child, childIdx) => {
    // Horizontal (left to right)
    if (child === "X") {
      if (data[itemIdx][childIdx + 1] === "M") {
        if (data[itemIdx][childIdx + 2] === "A") {
          if (data[itemIdx][childIdx + 3] === "S") values.horizontalLR += 1;
        }
      }

      // Descending Diagonal (center to bottom right)
      if (data[itemIdx + 1][childIdx + 1] === "M") {
        if (data[itemIdx + 2][childIdx + 2] === "A") {
          if (data[itemIdx + 3][childIdx + 3] === "S")
            values.diagonalTLtoBR += 1;
        }
      }

      // Descending Vertical (center to bottom)
      if (data[itemIdx + 1][childIdx] === "M") {
        if (data[itemIdx + 2][childIdx] === "A") {
          if (data[itemIdx + 3][childIdx] === "S") values.verticalTB += 1;
        }
      }

      // Descending diagonal (center to bottom left)
      if (childIdx >= 3) {
        if (data[itemIdx + 1][childIdx - 1] === "M") {
          if (data[itemIdx + 2][childIdx - 2] === "A") {
            if (data[itemIdx + 3][childIdx - 3] === "S")
              values.diagonalTRtoBL += 1;
          }
        }
      }

      // Horizontal (right to left)
      if (childIdx >= 3) {
        if (data[itemIdx][childIdx - 1] === "M") {
          if (data[itemIdx][childIdx - 2] === "A") {
            if (data[itemIdx][childIdx - 3] === "S") values.horizontalRL += 1;
          }
        }
      }

      // ascending diagonal (center to top left)
      if (itemIdx >= 3 && childIdx >= 3) {
        if (data[itemIdx - 1][childIdx - 1] === "M") {
          if (data[itemIdx - 2][childIdx - 2] === "A") {
            if (data[itemIdx - 3][childIdx - 3] === "S")
              values.diagonalBRtoTL += 1;
          }
        }
      }

      // ascending vertical (center to top)
      if (itemIdx >= 3) {
        if (data[itemIdx - 1][childIdx] === "M") {
          if (data[itemIdx - 2][childIdx] === "A") {
            if (data[itemIdx - 3][childIdx] === "S") values.verticalBT += 1;
          }
        }
      }

      // ascending diagonal (center to top right)
      if (itemIdx >= 3) {
        if (data[itemIdx - 1][childIdx + 1] === "M") {
          if (data[itemIdx - 2][childIdx + 2] === "A") {
            if (data[itemIdx - 3][childIdx + 3] === "S")
              values.diagonalBLtoTR += 1;
          }
        }
      }
    }
  });
});

console.log(values);
let count = 0;
Object.values(values).forEach((item) => {
  count += item;
});
console.log(count);
