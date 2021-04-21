const getRandomTemplate = require('../lib/template/templateRandomiser.js').getRandomTemplate;
const grammarVisitor = require('../lib/grammar/grammarVisitor.js');

const getGrammarQuestion = (req,res) =>
{
    const answerCode = getRandomTemplate();
    const errors = generateErrors(answerCode);
    const questionCode = generateQuestionCode(errors,answerCode);
    console.log("Grammar GET");
    return res.send({
    "questionCode": questionCode,
    "answerCode": answerCode,
    "errors": formatJSONErrList(errors),
    });
}

const generateErrors = (template) =>
{
    grammarVisitor.runVisitor(template);
    return grammarVisitor.getSelectedErrors(5);
}

const generateQuestionCode = (errors,template) =>
{
    //Split the template so it is split into lines.
    const templateLines = template.split("\n");
    for (let index = 0; index < templateLines.length; index++) {
        const element = templateLines[index];
    }
    errors.forEach(error => {
        // Got to the line number of that error.
        const lineNum = error.errorLineNum - 1;
        const lineString = templateLines[lineNum];
        // Use .replace to replace the missing value with the error value.
        templateLines[lineNum] = lineString.replace(error.missingValue,error.errorValue);
    });
    //Join back the template and return it.
    const questionCode = templateLines.join("\n");
    return questionCode;
}

const formatJSONErrList = (errors) =>
{
    var JSONArray = [];
    errors.forEach(error => {
        
        const JSONObject = {
            "lineNumber": error.errorLineNum,
            "linePosition": error.errorLinePos, 
            "description": error.getDescription(),
            "errorValue": error.errorValue,
            "missingValue": error.missingValue,
        }
        JSONArray.push(JSONObject);
    });
    return JSONArray;
}

module.exports = 
{
    getGrammarQuestion: getGrammarQuestion,
}
