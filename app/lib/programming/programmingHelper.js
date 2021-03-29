const FlowChart = require('./flowchart.js').FlowChart;

var flowchart;

const getQuestionCode = () =>
{
    const fs = require('fs');
    const filename = './app/templates/emptyProgram.java';
    const file = fs.readFileSync(filename,'utf-8');
    return file;
}

const generateFlowChart = () =>
{
    flowchart = new FlowChart(2);
    flowchart.addNode("Value");
    flowchart.addNode("IfElse");
    flowchart.addNode("If");
    flowchart.addNode("Value");
    flowchart.addNode("While");
    flowchart.outputVariables();
    console.log(flowchart.getAllNodes());
    // 1 For or While
    // 2 If or ElseIfs
    // 2 Value Manipulations
    // It should be randomly between the options and the order of these randomly chosen aswell.


    // If we pass through the sequence order of the flowchart we may be able to mark without use of compiler.
}

module.exports = 
{
    getQuestionCode: getQuestionCode,
    generateFlowChart: generateFlowChart,
}