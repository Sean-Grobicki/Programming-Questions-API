const getGrammarQuestion = (req,res) =>
{
    const tr = require('../lib/templateRandomiser');
    const out = tr.runVisitor();
    console.log("Out = "+ out);
    return res.send({"msg": out});
}


module.exports = 
{
    getGrammarQuestion: getGrammarQuestion,
}