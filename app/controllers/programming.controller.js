const getProgrammingQuestion = (req,res) =>
{
    return res.send({"msg": "programming get is working"});
};

const markProgrammingQuestion = (req,res) =>
{
    return res.send({"msg": "programming post is working"});
}

module.exports = 
{
    getProgrammingQuestion: getProgrammingQuestion,
    markProgrammingQuestion: markProgrammingQuestion,
}