const getRandomInt = require('../globalHelper.js').getRandomInt;
const getFile = require('../globalHelper.js').getFile;
const shuffleArray = require('../globalHelper.js').shuffleArray;

class TraceProgram
{
    constructor(noOfVariables)
    {
        this.operators = [];
        this.variables = [];
        this.initialVarValues = [];
        this.noOfVariables = noOfVariables;
        this.type = "";
        this.fullProgram = "";
        this.programToRun = "";
        this.getVarNames()
        this.getType();
    }

    getVarNames()
    {
        //Generate random variable names for the number of variables provided.
        for (let index = 0; index < this.noOfVariables; index++) 
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
        var template = "";
        
        if(this.type === "Recursion")
        {
            template = getFile('./app/templates/recursionTemplate.java');
            var args = "";
            var declarations = "";
            for (let index = 0; index < this.variables.length; index++) {
                args += "," + this.variables[index];
                declarations += ",int "+ this.variables[index];
            }
            template = template.replace("recursiveFunction(5","recursiveFunction(5"+args);
            template = template.replace("recursiveFunction(counter - 1","recursiveFunction(counter - 1"+args);
            template = template.replace("int counter","int counter "+ declarations);
        }
        else if (this.type === "For")
        {
            template = getFile('./app/templates/forTemplate.java');
        }
        else if (this.type === "While")
        {
            template = getFile('./app/templates/whileTemplate.java');
        }
        var initCode = "";
        for (let index = 0; index < this.noOfVariables; index++) {
            var templateInit = "        int variable = number;\n";
            this.initialVarValues[index] = getRandomInt(20);
            templateInit = templateInit.replace("variable",this.variables[index]);
            templateInit = templateInit.replace("number", this.initialVarValues[index]);
            initCode += templateInit; 
        }
        template = template.replace("//Intialisers go Here",initCode);
        this.program = template;
    }

    getListOfOperators()
    {
        const types = ["If","ElseIf"];
        var operators = ["Value","Value","Value"];
        for (let index = 0; index < 2; index++) {
            operators.push(types[getRandomInt(types.length-1)]);
        }
        return shuffleArray(operators);
    }


    generateProgram()
    {
        var codeBody = "";
        this.operators = this.getListOfOperators();
        this.operators.forEach(op => {
            const code = this.getCodeForOperator(op);
            codeBody += code;
        });
        this.program = this.program.replace("// Generated Code Goes Here",codeBody);
        this.programToRun = codeBody;
        return this.program;
    }

    getCodeForOperator(operator)
    {
        if (operator === "If")
        {
            var ifTemplate = "            if (comparison)\n            {\n    block1            }\n";
            const comparison = this.getComparsion();
            const block1 = this.getCodeForOperator("Value");
            ifTemplate = ifTemplate.replace("comparison",comparison);
            ifTemplate = ifTemplate.replace("block1",block1);
            return ifTemplate;
        }
        else if (operator === "ElseIf")
        {
            var ifElseTemplate = "            if (comparison)\n            {\n    block1            }\n            else\n            {\n  block2            }\n";
            const comparison = this.getComparsion();
            const block1 = this.getCodeForOperator("Value");
            const block2 = this.getCodeForOperator("Value");
            ifElseTemplate = ifElseTemplate.replace("comparison",comparison);
            ifElseTemplate = ifElseTemplate.replace("block1",block1);
            ifElseTemplate = ifElseTemplate.replace("block2",block2);
            return ifElseTemplate;
        }
        else if (operator === "Value")
        {
            var valueTemplate = "            assignVariable = variable operator value;\n";
            const assignVariable = this.getRandomVariable();
            const variable = this.getRandomVariable();
            const operators = ["+","-","*","/","%"];
            const operator = operators[getRandomInt(operators.length-1)];
            const value = getRandomInt(10);
            valueTemplate = valueTemplate.replace("assignVariable",assignVariable);
            valueTemplate = valueTemplate.replace("variable",variable);
            valueTemplate = valueTemplate.replace("operator",operator);
            valueTemplate = valueTemplate.replace("value",value);
            return valueTemplate;
        }
    }

    getComparsion()
    {
        const operators = [" == "," != "," < "," > "," <= "," >= "];
        const operator = operators[getRandomInt(operators.length-1)];
        const variable = this.getRandomVariable();
        const value = getRandomInt(10);
        return variable + operator + value;
    }

    getRandomVariable()
    {
        return this.variables[getRandomInt(this.variables.length-1)];
    }

}

class TraceTable 
{
    constructor(varNames,initialValues)
    {
        this.variables = [];
        for (let index = 0; index < varNames.length; index++) {
            const name = varNames[index];
            const initValue = initialValues[index];
            this.variables.push(new Variable(name,initValue));
        }
    }
    
    addTableRow(values)
    {
        for (let index = 0; index < this.variables.length; index++) {
            const value = values[index];
            this.variables[index].addStageValue(value);
        }
    }

}

class Variable
{
    constructor(varName,initialValue)
    {
        this.varName = varName;
        this.values = [];
        this.values.push(initialValue);
    }

    addStageValue(value)
    {
        this.values.push(value);
    }

}

module.exports = {
    TraceProgram: TraceProgram,
    TraceTable: TraceTable,
}