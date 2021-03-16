const getFile = () =>
{
    const fs = require('fs');
    //add way to get a random template from 
    const filename = './app/templates/template'+ getRandomInt(5) + '.java';
    const file = fs.readFileSync(filename,'utf-8');
    return file;
}


//Gets number from 1 to max inclusive. 
const getRandomInt = (max) =>
{
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const runVisitor = () =>
{
  
}

module.exports = 
{
  getFile: getFile,
  runVisitor: runVisitor,
}