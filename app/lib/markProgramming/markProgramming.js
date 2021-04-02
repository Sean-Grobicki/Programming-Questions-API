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

    // Use the operations table to write the javacode for each section.
    const finalCode = startTemplate.replace("//Write your code here",opTable.getAllCode());

    
    // get the correct output for the program.
    return finalCode;
    
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
        this.javaCode[index] = "";
        this.included[index] = false;
    }

    getOperationJavacode(index,nodes)
    {
        const operation = this.operationTypes[index];
        if (operation === "If")
        {
            const expression = nodes[0].nodeText.replace("If ","");
            const block = nodes[1].nodeText.replace("is", "=");
            this.javaCode[index] =  `if (${expression}) 
            {
                ${block};
            }`
        }
        else if(operation === "ElseIf")
        {
            const expression = nodes[0].nodeText.replace("If ","");
            const trueBlock = nodes[1].nodeText.replace("is", "=");
            const falseBlock = nodes[2].nodeText.replace("is","=");
            this.javaCode[index] = `if (${expression})
            {
                ${trueBlock};
            }
            else
            {
                ${falseBlock};
            }`
        }
        else if(operation === "While")
        {   
            const expression = nodes[0].nodeText.replace("If ","");
            const block = nodes[1].nodeText.replace("is", "=");
            this.javaCode[index] = `while (${expression})
            {
                ${block};
            }`
        }   
        else if(operation === "For")
        {
            const expression = nodes[1].nodeText.replace("If ","");
            const block = nodes[3].nodeText.replace("is","=");
            this.javaCode[index] = `for(int index = 0; ${expression}; index ++)
            {
                ${block};
            }`
        }
        else if (operation === "Assignment")
        {
            
            const expression = nodes[0].nodeText.replace("is", "=");
            this.javaCode[index] = `int ${expression};`
        }
        else if(operation === "Value")
        {
            const expression = nodes[0].nodeText.replace("is", "=");
            this.javaCode[index] = `${expression};`
        }
        else if (operation === "Output")
        {
            const variable = nodes[0].nodeText.replace("Output ","");
            this.javaCode[index] = `System.out.println(${variable});`;
        }
    }

    getAllCode()
    {
        return this.javaCode.join('\n');
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