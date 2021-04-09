//Gets number from 1 to max inclusive. 
const getRandomInt = (max) =>
{
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const getFile = (filename) =>
{
    const fs = require('fs');
    const file = fs.readFileSync(filename,'utf-8');
    return file;
}


module.exports = 
{
    getRandomInt: getRandomInt,
    getFile: getFile,
}