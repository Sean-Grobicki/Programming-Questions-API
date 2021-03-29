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
    flowchart.outputVariables();
    console.log(flowchart.getAllNodes());
    // This is where the flowchart is sequenced randomly. This can be done with the add node and the right type.

}

module.exports = 
{
    getQuestionCode: getQuestionCode,
    generateFlowChart: generateFlowChart,
}