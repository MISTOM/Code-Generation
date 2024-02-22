const fs = require("fs");
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateCodes(numChars, numCodes) {
  console.time("generateCodes");
  let codes = [];
  for (let i = 0; i < numCodes; i++) {
    let code = "";
    for (let j = 0; j < numChars; j++) {
      let index = Math.floor(Math.random() * chars.length);
      code += chars[index];
    }
    codes.push(code);
  }
  console.timeEnd("generateCodes");
  return codes;
}

function saveCodes(codes, fileName) {
  console.time("saveCodes");
  let csv = "codes,";

  codes.forEach((code) => {
    csv += code + ",";
  });

  csv = csv.slice(0, -1);

  fs.writeFile(fileName, csv, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File saved successfully to ${fileName}`);
    }
  });
  console.timeEnd("saveCodes");
}

let codes = generateCodes(5, 1000000);
saveCodes(codes, "codes.csv");
// console.log(codes);
