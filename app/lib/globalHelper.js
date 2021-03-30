//Gets number from 1 to max inclusive. 
const getRandomInt = (max) =>
{
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}


module.exports = 
{
    getRandomInt: getRandomInt,
}