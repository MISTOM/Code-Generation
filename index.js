let chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generateCodes(numChars, numCodes) {
  let codes = [];
  for (let i = 0; i < numCodes; i++) {
    let code = "";
    for (let j = 0; j < numChars; j++) {
      let index = Math.floor(Math.random() * chars.length);
      code += chars[index];
    }
    codes.push(code);
  }
  return codes;
}

console.log(generateCodes(4, 5));
