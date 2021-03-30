const FlowChart = require('./flowchart.js').FlowChart;
const getRandomInt = require('../globalHelper.js').getRandomInt;


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



const shuffleArray = (array) =>
{
    for (var i = array.length-1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

module.exports = 
{
    getQuestionCode: getQuestionCode,
    generateFlowChart: generateFlowChart,
}