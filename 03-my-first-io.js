
const fs = require('fs');

const file = fs.readFileSync(process.argv[2]).toString();
const linee = file.split('\n').length - 1;
console.log(linee);
