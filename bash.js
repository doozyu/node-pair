process.stdout.write('prompt >');
process.stdin.on("data",(data)=>{
  const cmd = data.toString().trim();
  console.log(process.cwd());
  process.stdout.write('\nprompt >')
}
)
