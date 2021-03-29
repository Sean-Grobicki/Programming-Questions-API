const getProgrammingQuestion = (req,res) =>
{
    const helper = require('../lib/programming/programmingHelper.js');
    const questionCode = helper.getQuestionCode();
    const flowchart = helper.generateFlowChart();
    return res.send({
        "questionCode": questionCode,
        "flowChart": flowChartToJSON(flowchart),
    });
};

const markProgrammingQuestion = (req,res) =>
{
    return res.send({"msg": "programming post is working"});
}

const flowChartToJSON = (flowchart) => 
{
    //Foreach through all the nodes and create the relevant fields to send back.
}

module.exports = 
{
    getProgrammingQuestion: getProgrammingQuestion,
    markProgrammingQuestion: markProgrammingQuestion,
}