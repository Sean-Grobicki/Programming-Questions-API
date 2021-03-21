const getRandomTemplate = require('../lib/templateRandomiser.js').getRandomTemplate;

const getGrammarQuestion = (req,res) =>
{
    const answerCode = getRandomTemplate();
    console.log("Out = "+ template);
    return res.send({
    "questionCode": "Add errors to original template",
    "answerCode": answerCode,
    "Errors": "Add all the occurring errors.",
    });
}


module.exports = 
{
    getGrammarQuestion: getGrammarQuestion,
}