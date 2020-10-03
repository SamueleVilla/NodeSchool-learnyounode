
const fs = require('fs');
const filename = process.argv[2];

 fs.readFile(filename,'utf-8',  (error, data) =>{
     if(error)
     throw error;

     const linee = data.split('\n').length - 1;
     console.log(linee);
});

