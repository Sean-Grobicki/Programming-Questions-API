const getProgrammingQuestion = (req,res) =>
{
    const helper = require('../lib/programming/programmingHelper.js');
    const questionCode = helper.getQuestionCode();
    const flowchart = helper.generateFlowChart();
    console.log("Programming GET");
    return res.send({
        "questionCode": questionCode,
        "flowChart": flowChartToJSON(flowchart),
    });
};

const markProgrammingQuestion = (req,res) =>
{
    const helper = require('../lib/markProgramming/markProgramming.js');
    const answer = req.body.questionCode;
    const flowchart = req.body.flowChart;
    const correctSolution = helper.getSolution(flowchart);
    const compilerOutput =  helper.markAnswer(answer);
    const operationsTable = helper.markOperations(answer);
    
    return res.send(markedSolutionToJSON(correctSolution,compilerOutput,operationsTable));
}

const markedSolutionToJSON = (correctSolution,compilerOutput,operationsTable) =>
{
    var JSONArray = [];
    //loop through the operations table and put the relevant information into JSON Array.
    const JSONObject = {
        "operationsTable": JSONArray,
        "compilerOutput": compilerOutput,
        "correctSolution": correctSolution,
    }
    return JSONObject;
}


const flowChartToJSON = (flowchart) => 
{
    //Foreach through all the nodes and create the relevant fields to send back.
    var nodesJSONArray = [];
    flowchart.forEach(node => {
        var trueNode;
        var falseNode;
        if (node.trueNodeID === undefined )
        {
            trueNode = node.childNode;
            if (trueNode === null)
            {
                trueNode = -1;
            }
            falseNode = -1;
        }
        else
        {
            trueNode = node.trueNodeID;
            falseNode = node.falseNodeID;
        }
        const nodeJSONObject = {
            "nodeID": node.nodeID,
            "nodeText": node.nodeText,
            "trueNodeChildID": trueNode,
            "falseNodeChildID": falseNode,
        }
        nodesJSONArray.push(nodeJSONObject);
    });
    return nodesJSONArray;
}

module.exports = 
{
    getProgrammingQuestion: getProgrammingQuestion,
    markProgrammingQuestion: markProgrammingQuestion,
}