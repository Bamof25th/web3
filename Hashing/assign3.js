// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

const crypto = require("crypto");

//  find a number which hashes to first four strings as 0000

function findHash(start, end) {
  const target = "0000";
  for (let i = start; i <= end; i++) {
    const hash = crypto
      .createHash("sha256")
      .update(String(" harkirat => Raman | Rs 100 Ram => Ankit | Rs 10" + i))
      .digest("hex");
    if (hash.slice(0, 4) === target) {
      return { input: i, hash: hash };
    }
  }
  return -1;
}

const logNum = findHash(88485, 99999999);

console.log(logNum);
