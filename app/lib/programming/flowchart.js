class FlowChart
{
    constructor(noOfVariables)
    {
        this.variables = [];
        this.nodes = [];
        this.maxNodeCount = 15;
        this.currrentNode = 0;
        this.getVarNames(noOfVariables);
        this.assignVariables();
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

    assignVariables()
    {
        //Add all the values into the structure of the flowchart
        this.variables.forEach(variable => 
        {
            const node = new ValueNode(this.currrentNode,variable,getRandomInt(20));
            this.nodes[this.currrentNode] = node;
            this.currrentNode += 1;  
        });
    }

    outputVariables()
    {
        this.variables.forEach(variable => 
            {
                this.nodes[this.currrentNode] = new OutputNode(this.currrentNode,variable);
                this.currrentNode += 1;
            });
        this.nodes[this.nodes.length-1].removeChild();
    }


    getAllNodes()
    {
        return this.nodes;
    }


    addNode(type)
    {
        // add a node to the current structure of the flowchart.
        if(type === "Value")
        {
            const variable = this.getRandomVariable();
            const expression = this.generateRandomExpression();
            const node = new ValueNode(this.currrentNode,variable,expression);
            this.nodes.push(node);
            this.currrentNode += 1;
        }
        else if (type === "IfElse")
        {
            const node = new ConditionalNode(this.currrentNode,this.generateComparison(this.getRandomVariable()));
            const trueNode = new ValueNode(this.currrentNode + 1, this.getRandomVariable(), this.generateRandomExpression() );
            const falseNode = new ValueNode();
            this.currrentNode += 3;
        }
        else if (type === "If")
        {

        }
        else if (type === "For")
        {

        }
        else if (type === "While")
        {

        }
    }

    generateComparison(variableName)
    {
        const comparators =  [' == ', ' != ' , ' > ' , ' < ' , ' <= ', ' >= '];
        const randComparator = comparators[getRandomInt(comparators.length)-1];
        return variableName + randComparator + getRandomInt(10);
    }


    generateRandomExpression(variableName)
    {
        const operators =  [' + ', ' - ' , ' * ' , ' / ' , ' % '];
        const randOperator = operators[getRandomInt(operators.length)-1];
        return this.getRandomVariable() + randOperator + getRandomInt(10);
        // generate a random expression using the variable provided. eg. variable + 1, variable -1.
    }

    getRandomVariable()
    {
        return this.variables[getRandomInt(this.variables.length) - 1];
    }
}

const getRandomInt = (max) =>
{
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}


const createForSequence = () =>
{

}


const createWhileSequence = () =>
{

}


class Node
{
    constructor(nodeID,nodeText)
    {
        this.nodeID = nodeID;
        this.nodeText = nodeText;
    }
}

class ValueNode extends Node
{
    constructor(nodeID,variableName, expression)
    {
        super(nodeID,variableName + " is " + expression);
        this.setChild(nodeID + 1);
    }

    setChild(nodeID)
    {
        this.childNode = nodeID;
    }
}

class OutputNode extends Node
{
    constructor(nodeID,variableName)
    {
        super(nodeID, "Output " + variableName);
        this.childNode = nodeID + 1;
    }

    removeChild()
    {
        this.childNode = null;
    }
}

class ConditionalNode extends Node
{
    constructor(nodeID,expression)
    {
        super(nodeID,"If " + expression);
    }

    setChildren(trueNodeID,falseNodeID)
    {
        this.trueNodeID = trueNodeID;
        this.falseNodeID = falseNodeID;
    }
}

module.exports = 
{
    FlowChart: FlowChart,
}
