const { readFileSync, writeFileSync } = require("fs");
console.log("mulai");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("selesai");
console.log("memulai yang baru");
