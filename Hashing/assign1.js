const crypto = require("crypto");

//  find a number which hashes to first four strings as 0000

function findHash(start, end) {
  const target = "0000";
  for (let i = start; i <= end; i++) {
    const hash = crypto.createHash("sha256").update(String(i)).digest("hex");
    if (hash.slice(0, 4) === target) {
      return i;
    }
  }
  return -1;
}

const logNum = findHash(1231, 99999999);

console.log(logNum);
