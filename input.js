// const net = require('net'); // net is part of node, so we don't have to install it like we do for chai
const stdin = process.stdin;      // actively listening for keyboard input with stdin
stdin.setEncoding('utf8');
let connection; // allows this file to send msgs to server

const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (data) => {    // must hardcode exit by ^C because stdin is listening
  if (data === '\u0003') {  // '\u0003' maps to ^C
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
  }
  if (data === 's') {
    connection.write('Move: down');
  }
  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 'd') {
    connection.write('Move: right');
  }
}

module.exports = { setupInput };