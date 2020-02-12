const net = require('net'); // net is part of node, so we don't have to install it like we do for chai
const stdin = process.stdin;
stdin.setEncoding('utf8');

const setupInput = function () {
  const stdin = process.stdin;      // actively listening for keyboard input with stdin
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (data) => {    // must hardcode exit by ^C because stdin is listening
  if (data === '\u0003') {  // '\u0003' maps to ^C
    process.exit();
  }
}

module.exports = { setupInput };