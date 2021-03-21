const { Variable } = require('../lib/helper.js');

const getGrammarQuestion = (req,res) =>
{
    const tr = require('../lib/templateRandomiser.js');
    const vari = require('../lib/helper.js').Variable;
    const inst = new Variable("number1","int");
    const out = tr.runVisitor();
    console.log("Out = "+ out);
    return res.send({"msg": out, "name": inst.getNewName(), "value": inst.getValue()});
}


module.exports = 
{
    getGrammarQuestion: getGrammarQuestion,
}