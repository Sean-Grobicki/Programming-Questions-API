const getGrammarQuestion = (req,res) =>
{
    return res.send({"msg": "grammar get is working"});
}


module.exports = 
{
    getGrammarQuestion: getGrammarQuestion,
}