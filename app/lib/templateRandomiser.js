const Helper = require('./helper.js').Helper;
const helperInstance = new Helper();

const getRandomTemplate = () =>
{
    var program = getFile();
    runVisitor(program);
    helperInstance.getVariables().forEach(variable => {
        program = program.split(variable.getOldName()).join(variable.getNewName());
        //Try and replace the variable assignment with the correct number using regex.
        program = program.split(variable.getType() + ' ' + variable.getNewName() + ' = *([0-9]) ;').join(variable.getType() + ' ' + variable.getNewName() + ' = ' + variable.getValue());
    });
    return program;
}

const getFile = () =>
{
    const fs = require('fs');
    //add way to get a random template from 
    //const filename = './app/templates/template'+ getRandomInt(5) + '.java';
    const filename = './app/templates/template1.java';
    const file = fs.readFileSync(filename,'utf-8');
    return file;
}


//Gets number from 1 to max inclusive. 
const getRandomInt = (max) =>
{
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const runVisitor = (input) =>
{
  const antlr4 = require('antlr4');
  //may need to include .js in require.
  const JavaLexer = require('./Java9Lexer.js');
  const JavaParser = require('./Java9Parser.js');

  const chars = new antlr4.InputStream(input);
  const lexer = new JavaLexer.Java9Lexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JavaParser.Java9Parser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.compilationUnit();
  const out = tree.accept(new Visitor());
  return out;
}

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }
    if(ctx.localVariableDeclaration  != null)
    {
      const type = ctx.localVariableDeclaration().unannType().unannPrimitiveType().numericType().integralType().getText();
      const varName = ctx.localVariableDeclaration().variableDeclaratorList().variableDeclarator()[0].variableDeclaratorId().identifier().getText();
      helperInstance.addVariable(varName,type);
    }
    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

module.exports = 
{
  getRandomTemplate: getRandomTemplate,
  randomInt: getRandomInt,
  helperInstance: helperInstance,
}