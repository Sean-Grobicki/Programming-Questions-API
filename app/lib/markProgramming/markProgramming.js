const OperationsTable = require('./markerHelpers.js').OperationsTable;
var finalCode = "";
var opTable;

const getSolution = (flowchart) =>
{
    const operations = getOperations(flowchart);
    // Create an operations table for each of these structures
    opTable = new OperationsTable(operations);
    var startTemplate = require('../programming/programmingHelper.js').getQuestionCode();
    var nodeNumber = 0;
    for (let index = 0; index < operations.length; index++) 
    {
        const operation = operations[index];
        if (operation === "If" || operation === "While")
        {
            const nodes = [flowchart[nodeNumber],flowchart[nodeNumber+1]];
            opTable.getOperationJavacode(index,nodes);
            nodeNumber += 2;
        }
        else if(operation === "Value" || operation === "Assignment" || operation === "Output")
        {
            const nodes = [flowchart[nodeNumber]];
            opTable.getOperationJavacode(index,nodes)
            nodeNumber += 1;
        }
        else if(operation === "For")
        {
            const nodes = [flowchart[nodeNumber],flowchart[nodeNumber+1],flowchart[nodeNumber+2],flowchart[nodeNumber+3]];
            opTable.getOperationJavacode(index,nodes);   
            nodeNumber += 4;
        }   
        else if(operation === "ElseIf")
        {
            const nodes = [flowchart[nodeNumber],flowchart[nodeNumber+1],flowchart[nodeNumber+2]];
            opTable.getOperationJavacode(index,nodes);
            nodeNumber += 3;
        }
    }
    finalCode = startTemplate.replace("        //Write your code here",opTable.getAllCode());
    return finalCode;
}

const markAnswer = async(answer) =>
{
    //Run Against the compiler
    const response = await require('./markerHelpers.js').runCompiler(answer);
    //Return the Output
    const correctOutput = require('./markerHelpers.js').runTracer(opTable);
    opTable.output = correctOutput;
    console.log(response.output); 
    return response.output;
}

const markOperations = (answer) =>
{
    for (let index = 0; index < opTable.operations.length; index++) {
        const operation = opTable.getOperation(index);
        const answerFormatted = answer.split(" ").join("");
        const codeFormatted = operation.code.split(" ").join("");
        if (answerFormatted.includes(codeFormatted))
        {
            operation.included = true;
        }
    }
    return opTable;
}

const getOperations = (flowchart) =>
{
    var operations = [];
    var currentNodeID = 0;
    operations.push("Assignment");
    operations.push("Assignment");
    currentNodeID += 2;
    while (currentNodeID < flowchart.length)
    {
        const currNode = flowchart[currentNodeID];
        const childNode = flowchart[currentNodeID + 1];
        const isCondition = currNode.falseNodeChildID !== -1;
        if (!isCondition && currNode.nodeText.includes("index"))
        {
            operations.push("For");
            currentNodeID += 4;
        }
        else if (!isCondition && currNode.nodeText.includes("Output"))
        {
            operations.push("Output");
            currentNodeID += 1;   
        }
        else if (!isCondition)
        {
            operations.push("Value");
            currentNodeID += 1;
        }
        else if (isCondition && childNode.trueNodeChildID === currNode.nodeID)
        {
            operations.push("While");
            currentNodeID += 2;
        }
        else if(isCondition && childNode.trueNodeChildID === currNode.falseNodeChildID)
        {
            operations.push("If");
            currentNodeID += 2;
        }
        else if (isCondition)
        {
            operations.push("ElseIf");
            currentNodeID += 3;
        }
    }
    return operations;
} 

module.exports = 
{
    getSolution: getSolution,
    markAnswer: markAnswer,
    markOperations: markOperations,
}