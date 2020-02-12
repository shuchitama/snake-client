const net = require('net'); // net is part of node, so we don't have to install it like we do for chai
const { connect } = require('./client');

console.log('Connecting ...');
connect();