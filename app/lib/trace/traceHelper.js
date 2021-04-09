const getRandomInt = require('../globalHelper.js').getRandomInt;

class TraceProgram
{
    constructor(noOfVariables)
    {
        this.operators = [];
        this.variables = [];
        this.getVarNames(noOfVariables)
        this.getType();
    }

    getVarNames(noOfVariables)
    {
        //Generate random variable names for the number of variables provided.
        for (let index = 0; index < noOfVariables; index++) 
        {
            const varName = this.getVarName();
            this.variables.push(varName);
        }
    }

    getVarName() 
    {
        const varNames = require('../varNames.js').varNames;
        const varName = varNames[getRandomInt(varNames.length-1)];
        const toFind = this.variables.includes(varName);
        if (toFind === false)
        {
            return varName;
        }
        else
        {
            return this.getVarName();
        }
    }

    getType()
    {
        const types = ["Recursion", "For", "While"];
        this.type =  types[getRandomInt(types.length) -1];
        if(this.type === "Recursion")
        {

        }
        else if (this.type === "For")
        {

        }
        else if (this.type === "While")
        {
            
        }
    }

    getListOfOperators()
    {


    }


    generateCodeForOperators()
    {

    }

}

class Variable
{
    constructor(varName, varValue)
    {
        this.name = varName;
        this.value = varValue;
    }

}


module.exports = {
    TraceProgram: TraceProgram,
    TraceTable: TraceTable,
}