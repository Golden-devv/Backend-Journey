const fs = require('fs'); // fs means file system

const data = fs.readFileSync('hello.js', 'utf8');
console.log(data);

// Node.js comes with built-in modules, and fs is one of them. It lets JavaScript read and write files on the computer.