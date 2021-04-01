const getSolution = (flowchart) =>
{
    const operations = getOperations(flowchart);
    // Create an operations table for each of these structures
    const opTable = new OperationsTable();
    operations.forEach(operation => {
        opTable.addOperation(operation);        
    });
    opTable.displayTable();
    var startTemplate = require('../programming/programmingHelper.js').getQuestionCode();

    // Replace the javacode in the opsTable with the correct code

    for (let index = 0; index < operations.length; index++) 
    {
        const operation = operations[index];
        
    }



    startTemplate.replace("//Write your code here");


    // Use the operations table to write the javacode for each section.




    // get the correct output for the program.

    
}

const markAnswer = (answer) =>
{
    //Run Against the compiler

    //Return the Output

    // Check the output against the correct solution. 
}

const markOperations = (table,answer) =>
{
    //Identify which of the operations the users answer has and mark ackwordingly.

    // Make sure the order is taken into account when calculating this.
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


class OperationsTable
{
    constructor()
    {
        this.operationTypes = [];
        this.javaCode = [];
        this.included = [];
    }

    displayTable()
    {
        for (let index = 0; index < this.operationTypes.length; index++) {
            console.log(this.operationTypes[index]);
            console.log(this.javaCode[index]);
            console.log(this.included[index]);
        }
    }

    addOperation(operationType)
    {
        const index = this.operationTypes.length;
        this.operationTypes[index] = operationType;
        this.javaCode[index] = this.getJavacode(operationType);
        this.included[index] = false;
    }

    getJavacode(operation)
    {
        if (operation === "If")
        {
            return `if (expression) 
            {
                block;
            }`
        }
        else if(operation === "ElseIf")
        {
            return `if (expression)
            {
                trueBlock;
            }
            else
            {
                falseBlock;
            }`
        }
        else if(operation === "While")
        {   
            return `while (expression)
            {
                block;
            }`
        }   
        else if(operation === "For")
        {
            return `for(int index = 0; expression; index ++)
            {
                block;
            }`
        }
        else if (operation === "Assignment")
        {
            return `int variable = expression;`
        }
        else if(operation === "Value")
        {
            return `variable = expression;`
        }
        else if (operation === "Output")
        {
            return `System.out.println(variable);`;
        }
    }


    getJSON()
    {

    }
}


module.exports = 
{
    getSolution: getSolution,
    markAnswer: markAnswer,
    markOperations: markOperations,
}