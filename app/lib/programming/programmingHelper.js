const FlowChart = require('./flowchart.js').FlowChart;
const getRandomInt = require('../globalHelper.js').getRandomInt;
const shuffleArray = require('../globalHelper.js').shuffleArray;


const getQuestionCode = () =>
{
    const fs = require('fs');
    const filename = './app/templates/emptyProgram.java';
    const file = fs.readFileSync(filename,'utf-8');
    return file;
}

const generateFlowChart = () =>
{
    const flowchart = new FlowChart(2);
    const loops = ["For", "While"];
    const conditionals = ["IfElse", "If"];
    var nodes = [];
    nodes.push(loops[getRandomInt(loops.length)-1]);
    nodes.push(conditionals[getRandomInt(conditionals.length)-1]);
    nodes.push(conditionals[getRandomInt(conditionals.length)-1]);
    nodes.push("Value");
    nodes.push("Value");
    nodes = shuffleArray(nodes);

    nodes.forEach(type => {
        flowchart.addNode(type);
    });

    flowchart.outputVariables();

    return flowchart.getAllNodes();
}


module.exports = 
{
    getQuestionCode: getQuestionCode,
    generateFlowChart: generateFlowChart,
}