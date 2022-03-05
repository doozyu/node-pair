const fs = require('fs');

module.exports = function (fileName, a, b, c) {
  console.log("cat " + fileName);
  //read file and print
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
