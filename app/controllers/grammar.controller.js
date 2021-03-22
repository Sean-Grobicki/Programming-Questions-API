const getRandomTemplate = require('../lib/templateRandomiser.js').getRandomTemplate;
const grammarHelper = require('../lib/grammarHelper');

const getGrammarQuestion = (req,res) =>
{
    const answerCode = getRandomTemplate();
    const errors = generateErrors(answerCode);
    const questionCode = generateQuestionCode(errors);
    return res.send({
    "questionCode": "Add errors to original template",
    "answerCode": answerCode,
    "Errors": "Add all the occurring errors.",
    });
}

const generateErrors = (template) =>
{
    runVisitor(template);
    const helper = grammarHelper.helperInstance;
    helper.removeInitialisers();
    console.log(helper.getAllErrors());
    const errList = helper.selectErrors();
}

const runVisitor = (input) =>
{
  const antlr4 = require('antlr4');
  const JavaLexer = require('../lib/antlrGenerated/Java9Lexer.js')
  const JavaParser = require('../lib/antlrGenerated/Java9Parser.js');
  const chars = new antlr4.InputStream(input);
  const lexer = new JavaLexer.Java9Lexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JavaParser.Java9Parser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.compilationUnit();
  tree.accept(new grammarHelper.Visitor());
}

const generateQuestionCode = (errors) =>
{

}

module.exports = 
{
    getGrammarQuestion: getGrammarQuestion,
}