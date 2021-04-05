class OperationsTable
{
    constructor(operators)
    {
        this.operations = [];
        this.operators = operators;
        this.operators.forEach(operation => {
            this.addOperation(operation);        
        });
    }

    getNumberOfOperations()
    {
        return this.operations.length;
    }

    getOperation(index)
    {
        return this.operations[index];
    }

    addOperation(operationType)
    {
        const index = this.operations.length;
        this.operations[index] = new Operation(operationType);
    }

    getOperationJavacode(index,nodes)
    {
        const operation = this.operations[index].type;
        if (operation === "If")
        {
            const expression = nodes[0].nodeText.replace("If ","");
            const block = nodes[1].nodeText.replace(" is ", " = ");
            this.operations[index].code =  `if (${expression}) 
            {
                ${block};
            }`
            //Check if the expression is true and change the value accordingly
        }
        else if(operation === "ElseIf")
        {
            const expression = nodes[0].nodeText.replace("If ","");
            const trueBlock = nodes[1].nodeText.replace(" is ", " = ");
            const falseBlock = nodes[2].nodeText.replace(" is "," = ");
            this.operations[index].code = `if (${expression})
            {
                ${trueBlock};
            }
            else
            {
                ${falseBlock};
            }`
            //Check if the expression is true or false and change the value accordingly
        }
        else if(operation === "While")
        {   
            const expression = nodes[0].nodeText.replace("If ","");
            const block = nodes[1].nodeText.replace(" is ", " = ");
            this.operations[index].code = `while (${expression})
            {
                ${block};
            }`
        }   
        else if(operation === "For")
        {
            const expression = nodes[1].nodeText.replace("If ","");
            const block = nodes[3].nodeText.replace(" is "," = ");
            this.operations[index].code = `for(int index = 0; ${expression}; index ++)
            {
                ${block};
            }`
        }
        else if (operation === "Assignment")
        {
            
            const expression = nodes[0].nodeText.replace(" is ", " = ");
            this.operations[index].code = `int ${expression};`
        }
        else if(operation === "Value")
        {
            const expression = nodes[0].nodeText.replace(" is ", " = ");
            this.operations[index].code = `${expression};`
        }
        else if (operation === "Output")
        {
            const variable = nodes[0].nodeText.replace("Output ","");
            this.operations[index].code = `System.out.println(${variable});`;
        }
    }

    getAllCode()
    {
        var code = [];
        this.operations.forEach(operation => {
            code.push(operation.code);
        });
        return code.join('\n');
    }
}

class Operation 
{
    constructor(type)
    {
        this.type = type;
        this.code = "";
        this.included = false;
    }

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
            const toFind = split[0].replace(/ /g,"");
            console.log(toFind);
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
            const toFind = split[0].replace(/ /g,"");
            const variableIndex = this.varNames.indexOf(toFind);
    
            const expression = split[1];
            this.changeValue(variableIndex,expression);
        }
    }

    checkFor(length,trueExpression)
    {
        for (let index = 0; index < length; index++) {
            const split = trueExpression.split(" = ");
            const toFind = split[0].replace(/ /g,"");
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
            const toFind = split[0].replace(/ /g,"");
            const variableIndex = this.varNames.indexOf(toFind);
            const expression = split[1];    
            this.changeValue(variableIndex,expression);
        }
        else
        {
            const split = falseExpression.split(" = ");
            const toFind = split[0].replace(/ /g,"");
            const variableIndex = this.varNames.indexOf(toFind);
            const expression = split[1];    
            this.changeValue(variableIndex,expression);
        }
    }

    checkValueChange(expression)
    {
        const split = expression.split(" = ");
        const variableIndex = this.varNames.indexOf(split[0]);
        const expressionChange = split[1];    
        this.changeValue(variableIndex,expressionChange);
    }

    checkComparison(comparison)
    {
        if (comparison.includes("=="))
        {
            const values = comparison.split(" == ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1]);
            return variable === number;
        }
        else if (comparison.includes("!="))
        {
            const values = comparison.split(" != ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1]);
            return variable !== number;
        }
        else if (comparison.includes(">"))
        {
            const values = comparison.split(" > ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1]);
            return variable > number;
        }
        else if (comparison.includes("<"))
        {
            const values = comparison.split(" < ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1]);
            return variable < number;
        }
        else if (comparison.includes("<="))
        {
            //Looks like this isn't splitting the string
            console.log(comparison)
            const values = comparison.split(" <= ");
            console.log(values);
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            console.log(variable);
            const number = parseInt(values[1]);
            return variable <= number;
        }
        else if (comparison.includes(">="))
        {
            console.log(comparison);
            const values = comparison.split(" >= ");
            console.log(values);
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            console.log(variable);
            const number = parseInt(values[1]);
            return variable >= number;
        }
    }


    changeValue(varIndex, expression)
    {
        //expression should only be bit after the equals
        //eg. pizzas * 5
        if(expression.includes(" * "))
        {
            const values = expression.split(" * ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = variable * number;
        }
        else if(expression.includes(" + "))
        {
            const values = expression.split(" + ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = variable + number;
        }
        else if(expression.includes(" - "))
        {
            const values = expression.split(" - ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = variable - number;
        }
        else if(expression.includes(" / "))
        {
            const values = expression.split(" / ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = Math.trunc(variable / number);
        }
        else if(expression.includes(" % "))
        {
            const values = expression.split(" % ");
            const variable = this.varValues[this.varNames.indexOf(values[0])];
            const number = parseInt(values[1].replace(";",""));
            this.varValues[varIndex] = Math.trunc(variable % number);
        }
    }
}

const runTracer = (opTable) =>
{
    //Lines Taken by Operation
    //Assignment 1 
    //Value 1
    //If 4
    //If/Else 8
    //While 4
    //For 4

    // Need to get the variable names and the initial values from the code.
    const assignments = opTable.operators.filter(x => x === "Assignment").length;
    var varNames = [];
    var varValues = [];
    for (let index = 0; index < assignments; index++) {
        const code = opTable.getOperation(index).code;
        const values = code.split(" = ");
        const variable = values[0].replace("int ","");
        const value = parseInt(values[1].replace(";",""));
        varNames.push(variable);
        varValues.push(value);
    }
    const tracer = new Tracer(varNames,varValues);
    for (let index = 2; index < opTable.getNumberOfOperations(); index++) {
        const operation = opTable.getOperation(index).type;
        const code = opTable.getOperation(index).code;
        const lines = code.split('\n');
        if (operation === "If")
        {
            const comparison = lines[0].replace("if (","").replace(")","");
            const trueExpression = lines[2];
            tracer.checkIf(comparison,trueExpression);
        }
        else if(operation === "ElseIf")
        {
            const comparison = lines[0].replace("if (","").replace(")","");
            const trueExpression = lines[2];
            const falseExpression = lines[6];
            tracer.checkIfElse(comparison,trueExpression,falseExpression);
        }
        else if(operation === "While")
        {   
            const comparison = lines[0].replace("while (","").replace(")","");
            const trueExpression = lines[2];
            tracer.checkWhile(comparison,trueExpression);

        }   
        else if(operation === "For")
        {
            //Need to just get the length on the for loop
            const length = parseInt(lines[0].replace("for(int index = 0; index < ","").replace("; index ++)",""));
            console.log("Length: " + length);
            const trueExpression = lines[2];
            tracer.checkFor(length,trueExpression);
        }
        else if(operation === "Value")
        {
            tracer.checkValueChange(lines[0]);
        }
        console.log("Values: " + tracer.varValues + " Operation: " + operation );
    }
    return tracer.varValues;
}

const runCompiler = (answerCode) =>
{

}

module.exports = 
{
    OperationsTable: OperationsTable,
    runTracer: runTracer,
}
