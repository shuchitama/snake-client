const net = require('net'); // net is part of node, so we don't have to install it like we do for chai

// Establish connection with the game server:
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  // interpret incoming data as text:
  conn.setEncoding('utf8');
  // event handler to console.log incoming data
  conn.on('data', (data) => {       // allows client to see message sent by server
    console.log('Server says: ', data);
  });

  return conn;
}

console.log('Connecting ...');
connect();