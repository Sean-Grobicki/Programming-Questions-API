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

const shuffleArray = (array) =>
{
    for (var i = array.length-1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

class Tracer
{
    constructor(varNames, varValues)
    {
        this.varNames = varNames;
        this.varValues = varValues;
    }

    checkIf(comparison,trueExpression)
    {
        if(this.checkComparison(comparison))
        {
            // Split the expression to work out the variable index
            const split = trueExpression.split(" = ");
            const toFind = split[0].split(/ /g).join("");
            const variableIndex = this.varNames.indexOf(toFind);
            const expression = split[1];
            this.changeValue(variableIndex,expression);
        }
    }

    checkWhile(comparison, trueExpression)
    {
        while(this.checkComparison(comparison))
        {
            // Split the expreesion to work out the variable index
            const split = trueExpression.split(" = ");
            const toFind = split[0].split(/ /g).join("");
            const variableIndex = this.varNames.indexOf(toFind);
    
            const expression = split[1];
            this.changeValue(variableIndex,expression);
        }
    }

    checkFor(length,trueExpression)
    {
        for (let index = 0; index < length; index++) {
            const split = trueExpression.split(" = ");
            const toFind = split[0].split(/ /g).join("");
            const variableIndex = this.varNames.indexOf(toFind);
            const expression = split[1];
            this.changeValue(variableIndex,expression);
        }
    }

    checkIfElse(comparison, trueExpression, falseExpression)
    {
        
        if(this.checkComparison(comparison))
        {
            // Split the expreesion to work out the variable index
            const split = trueExpression.split(" = ");
            const toFind = split[0].split(/ /g).join("");
            const variableIndex = this.varNames.indexOf(toFind);
            const expression = split[1];    
            this.changeValue(variableIndex,expression);
        }
        else
        {
            const split = falseExpression.split(" = ");
            const toFind = split[0].split(/ /g).join("");
            const variableIndex = this.varNames.indexOf(toFind);
            const expression = split[1];    
            this.changeValue(variableIndex,expression);
        }
    }

    checkValueChange(expression)
    {
        const split = expression.split(" = ");
        const toFind = split[0].split(/ /g).join("");
        const variableIndex = this.varNames.indexOf(toFind);
        const expressionChange = split[1];  
        this.changeValue(variableIndex,expressionChange);
    }

    checkComparison(comparison)
    {
        if (comparison.includes("=="))
        {
            const values = comparison.split(" == ");
            const toFind = values[0].split(/ /g).join("");
            const variable = parseInt(this.varValues[this.varNames.indexOf(toFind)]);
            const number = parseInt(values[1]);
            return variable === number;
        }
        else if (comparison.includes("!="))
        {
            const values = comparison.split(" != ");
            const toFind = values[0].split(/ /g).join("");
            const variable = parseInt(this.varValues[this.varNames.indexOf(toFind)]);
            const number = parseInt(values[1]);
            return variable !== number;
        }
        else if (comparison.includes("<="))
        {
            const values = comparison.split(" <= ");
            const toFind = values[0].split(/ /g).join("");
            const variable = parseInt(this.varValues[this.varNames.indexOf(toFind)]);
            const number = parseInt(values[1]);
            return variable <= number;
        }
        else if (comparison.includes(">="))
        {
            const values = comparison.split(" >= ");
            const toFind = values[0].split(/ /g).join("");
            const variable = parseInt(this.varValues[this.varNames.indexOf(toFind)]);
            const number = parseInt(values[1]);
            return variable >= number;
        }
        else if (comparison.includes(">"))
        {
            const values = comparison.split(" > ");
            const toFind = values[0].split(/ /g).join("");
            const variable = parseInt(this.varValues[this.varNames.indexOf(toFind)]);
            const number = parseInt(values[1]);
            return variable > number;
        }
        else if (comparison.includes("<"))
        {
            const values = comparison.split(" < ");
            const toFind = values[0].split(/ /g).join("");
            const variable = parseInt(this.varValues[this.varNames.indexOf(toFind)]);
            const number = parseInt(values[1]);
            return variable < number;
        }
    }


    changeValue(varIndex, expression)
    {
        if(expression.includes(" * "))
        {
            const values = expression.split(" * ");
            const toFind = values[0].split(/ /g).join("");
            const variable = this.varValues[this.varNames.indexOf(toFind)];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = variable * number;
        }
        else if(expression.includes(" + "))
        {
            const values = expression.split(" + ");
            const toFind = values[0].split(/ /g).join("");
            const variable = this.varValues[this.varNames.indexOf(toFind)];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = variable + number;
        }
        else if(expression.includes(" - "))
        {
            const values = expression.split(" - ");
            const toFind = values[0].split(/ /g).join("");
            const variable = this.varValues[this.varNames.indexOf(toFind)];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = variable - number;
        }
        else if(expression.includes(" / "))
        {
            const values = expression.split(" / ");
            const toFind = values[0].split(/ /g).join("");
            const variable = this.varValues[this.varNames.indexOf(toFind)];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = Math.trunc(variable / number);
        }
        else if(expression.includes(" % "))
        {
            const values = expression.split(" % ");
            const toFind = values[0].split(/ /g).join("");
            const variable = this.varValues[this.varNames.indexOf(toFind)];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = Math.trunc(variable % number);
        }
    }
}


module.exports = 
{
    getRandomInt: getRandomInt,
    getFile: getFile,
    shuffleArray: shuffleArray,
    Tracer: Tracer,
}