class OperationsTable
{
    constructor(operators)
    {
        this.operations = [];
        this.operators = operators;
        this.output = 0;
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
            this.operations[index].code =  `      if (${expression})\n      {\n        ${block};\n      }`
            //Check if the expression is true and change the value accordingly
        }
        else if(operation === "ElseIf")
        {
            const expression = nodes[0].nodeText.replace("If ","");
            const trueBlock = nodes[1].nodeText.replace(" is ", " = ");
            const falseBlock = nodes[2].nodeText.replace(" is "," = ");
            this.operations[index].code = `      if (${expression})\n      {\n         ${trueBlock};\n      }\n      else\n      {\n        ${falseBlock};\n      }`
            //Check if the expression is true or false and change the value accordingly
        }
        else if(operation === "While")
        {   
            const expression = nodes[0].nodeText.replace("If ","");
            const block = nodes[1].nodeText.replace(" is ", " = ");
            this.operations[index].code = `      while (${expression})\n      {\n        ${block};\n      }`
        }   
        else if(operation === "For")
        {
            const expression = nodes[1].nodeText.replace("If ","");
            const block = nodes[3].nodeText.replace(" is "," = ");
            this.operations[index].code = `      for(int index = 0; ${expression}; index ++)\n      {\n        ${block};\n      }`
        }
        else if (operation === "Assignment")
        {
            
            const expression = nodes[0].nodeText.replace(" is ", " = ");
            this.operations[index].code = `      int ${expression};`
        }
        else if(operation === "Value")
        {
            const expression = nodes[0].nodeText.replace(" is ", " = ");
            this.operations[index].code = `      ${expression};`
        }
        else if (operation === "Output")
        {
            const variable = nodes[0].nodeText.replace("Output ","");
            this.operations[index].code = `      System.out.println(${variable});`;
        }
    }

    getAllCode()
    {
        var code = "";
        this.operations.forEach(operation => {
            code = code + operation.code + "\n";
        });
        return code;
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


const runTracer = (opTable) =>
{
    // Need to get the variable names and the initial values from the code.
    const assignments = opTable.operators.filter(x => x === "Assignment").length;
    var varNames = [];
    var varValues = [];
    for (let index = 0; index < assignments; index++) {
        const code = opTable.getOperation(index).code;
        const values = code.split(" = ");
        const variable = values[0].replace("int ","").split(/ /g).join("");
        const value = parseInt(values[1].replace(";",""));
        varNames.push(variable);
        varValues.push(value);
    }
    const Tracer = require('../globalHelper.js').Tracer;
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
            const trueExpression = lines[2];
            tracer.checkFor(length,trueExpression);
        }
        else if(operation === "Value")
        {
            tracer.checkValueChange(lines[0]);
        }
    }
    var output = '';
    tracer.varValues.forEach(value => {
        output += value + '\n';       
    });
    return output;
}

const runCompiler = (answerCode) =>
{
    const toSend = answerCode.split("\n").join("").split("\r").join("");
    const headers = {"Content-Type": "application/json"};
    // need to get rid of the concatination from the string.
    const body = JSON.stringify({
        "clientId": "ad8af65b1ae13a8d8ec741410ed3e045",
        "clientSecret": "14b1f7e72b7da6a546928194df3b385f3ccac98830e612fe4d18b798497c8f01",
        "script": toSend,
        "stdin": "[]",
        "language": "java",
        "versionIndex": 1,
    });
    const fetch = require('node-fetch');
    return fetch("https://api.jdoodle.com/v1/execute",
        {
          method: 'POST',
          headers: headers,
          body: body,
        })
        .then((response) => response.json())
        .catch((error) => 
        {
          console.log(error.message);
        });
}

module.exports = 
{
    OperationsTable: OperationsTable,
    runTracer: runTracer,
    runCompiler: runCompiler,
}
