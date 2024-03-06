// recover.js
const bs58 = require('bs58');
const fs = require('fs');
// b = bs58.decode('3gNZEgkNvLWU3mgUidTkrELCGwxLThCVkadMMc92cBum7k711SgtNu3YUSb7TbxzsXmsXfkeMnfFzyqnYUzbidtz');
b = bs58.decode('5jESUbChANhUngcqmmvzwD2tkrvhK4BjLbhu2a8aAqB7cYqrFdq4357zdSxf7hbnQp5UVX4HdZEz6TyBzJk1kvJM');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key2.json', `[${j}]`)
console.log('test');