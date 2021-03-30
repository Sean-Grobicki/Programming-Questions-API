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
            const trueNode = new ValueNode(this.currrentNode + 1, this.getRandomVariable(), this.generateRandomExpression());
            const falseNode = new ValueNode(this.currrentNode + 2, this.getRandomVariable(), this.generateRandomExpression());
            node.setChildren(trueNode.nodeID,falseNode.nodeID);
            trueNode.setChild(this.currrentNode + 3);
            falseNode.setChild(this.currrentNode + 3);
            this.nodes.push(node);
            this.nodes.push(trueNode);
            this.nodes.push(falseNode);
            this.currrentNode += 3;
        }
        else if (type === "If")
        {
            const node = new ConditionalNode(this.currrentNode,this.generateComparison(this.getRandomVariable()));
            const trueNode = new ValueNode(this.currrentNode + 1, this.getRandomVariable(), this.generateRandomExpression());
            node.setChildren(trueNode.nodeID,this.currrentNode + 2);
            trueNode.setChild(this.currrentNode + 2);
            this.nodes.push(node);
            this.nodes.push(trueNode);
            this.currrentNode += 2;
        }
        else if (type === "For")
        {
            const indexNode = new ValueNode(this.currrentNode,"index",0);
            const condition = new ConditionalNode(this.currrentNode + 1,"index < " + getRandomInt(10));
            const iterator = new ValueNode(this.currrentNode + 2,"index","index + 1");
            const body = new ValueNode(this.currrentNode + 3, this.getRandomVariable(),this.generateRandomExpression());
            condition.setChildren(iterator.nodeID,this.currrentNode + 4);
            body.setChild(condition.nodeID);
            this.nodes.push(indexNode);
            this.nodes.push(condition);
            this.nodes.push(iterator);
            this.nodes.push(body);
            this.currrentNode += 4;
        }
        else if (type === "While")
        {
            // Need to stop going in unlimited while loops.
            // So value manipulation needs to get towards the goal.
            const variable = this.getRandomVariable();
            const node = new ConditionalNode(this.currrentNode,variable + " > " + 0);
            const trueNode = new ValueNode(this.currrentNode + 1,variable,variable + " - " + getRandomInt(10));
            trueNode.setChild(node.nodeID);
            node.setChildren(trueNode.nodeID,this.currrentNode + 2);
            this.nodes.push(node);
            this.nodes.push(trueNode);
            this.currrentNode += 2;
        }
    }

    generateComparison(variableName)
    {
        const comparators =  [' == ', ' != ' , ' > ' , ' < ' , ' <= ', ' >= '];
        const randComparator = comparators[getRandomInt(comparators.length)-1];
        return variableName + randComparator + getRandomInt(10);
    }


    generateRandomExpression()
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
  return require('../globalHelper.js').getRandomInt(max);
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
    constructor(nodeID,comparator)
    {
        super(nodeID,"If " + comparator);
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
    getRandomInt: getRandomInt,
}
