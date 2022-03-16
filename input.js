const handleUserInput = function (key) {

  // process.stdout.write(key);
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.stdout.write('さよなら!\n');
    process.exit();
  }
}; 

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  handleUserInput, 
  setupInput
};