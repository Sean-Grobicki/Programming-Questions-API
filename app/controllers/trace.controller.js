const helper = require('../lib/trace/traceHelper.js');
var program;

const getTraceQuestion = (req,res) =>
{
    const questionCode = generateCode();
    const traceTable = generateTraceTable();
    return res.send(getJSONTrace(questionCode,traceTable));
}

const generateCode = () =>
{
    const TraceProgram = helper.TraceProgram;
    program =  new TraceProgram(3);
    const code = program.generateProgram();
    return code;
}

const generateTraceTable = () =>
{
    var varNames = program.variables;
    var varValues = program.initialVarValues;
    const Tracer = require('../lib/globalHelper.js').Tracer;
    const TraceTable = require('../lib/trace/traceHelper.js').TraceTable;
    const traceTable = new TraceTable(varNames,varValues);
    const code = program.programToRun;
    console.log(program.program);
    const lines = code.split('\n');
    for (let index = 0; index < 5; index++) 
    {
        const tracer = new Tracer(varNames,varValues);
        var currentLine = 0;
        for (let index = 0; index < program.operators.length; index++) {
            const operation = program.operators[index];
            if (operation === "If")
            {
                const comparison = lines[currentLine].replace("if (","").replace(")","");
                const trueExpression = lines[currentLine + 2];
                tracer.checkIf(comparison,trueExpression);
                currentLine += 4;
            }
            else if(operation === "ElseIf")
            {
                const comparison = lines[currentLine].replace("if (","").replace(")","");
                const trueExpression = lines[currentLine + 2];
                const falseExpression = lines[currentLine + 6];
                tracer.checkIfElse(comparison,trueExpression,falseExpression);
                currentLine += 8;
            }
            else if(operation === "Value")
            {
                tracer.checkValueChange(lines[currentLine]);
                currentLine += 1;
            }
        }
        varValues = tracer.varValues;
        traceTable.addTableRow(varValues);
    }
    console.log(traceTable.variables[0].values);
    console.log(traceTable.variables[1].values);
    console.log(traceTable.variables[2].values);
    return traceTable;
}

const getJSONTrace = (questionCode,traceTable) =>
{
    var TableArray = [];
    for (let index = 0; index < traceTable.variables.length; index++) {
        const values = traceTable.variables[index].values;
        var varStages = [];
        for (let index = 0; index < values.length; index++) {
            varStages.push({"stageID": index, "stageValue": values[index]})
        }
        TableArray.push({"variableName": traceTable.variables[index].varName, "variableStages": varStages})
    }
    const JSONObject = {
        "questionCode": questionCode,
        "traceTable": TableArray,
    }
    return JSON.stringify(JSONObject);
}

module.exports = 
{
    getTraceQuestion: getTraceQuestion,
}