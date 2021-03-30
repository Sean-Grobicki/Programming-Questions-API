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
    // Antlr visitor could be used to see if the correct methods have been used to create theflowchart if we pass through the sequence order.
    return res.send({"msg": "programming post is working"});
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