const pwd = require('./pwd');
const cat = require('./cat');
const ls = require('./ls');

process.stdout.write('prompt >');
process.stdin.on("data",(data)=>{
  const cmd = data.toString().trim().split(" ");
    switch (cmd[0]) {
      case "cat":
        const fileName = cmd[1];
        cat(fileName);
        break;
      case "ls":
        ls();
        break;
      case "pwd":
        pwd();
        break;
      default:
        break;
    }
})
