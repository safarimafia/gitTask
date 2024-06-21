const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter player name: ', (playerName) => {
  console.log(`Player name is: ${playerName}`);
  rl.close();
});
