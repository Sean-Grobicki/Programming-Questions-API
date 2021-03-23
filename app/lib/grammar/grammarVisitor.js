var helperInstance;
const GrammarHelper = require("./grammarHelper.js").GrammarHelper;

const runVisitor = (input) =>
{
  helperInstance = new GrammarHelper();
  const antlr4 = require('antlr4');
  const JavaLexer = require('../antlrGenerated/Java9Lexer.js')
  const JavaParser = require('../antlrGenerated/Java9Parser.js');
  const chars = new antlr4.InputStream(input);
  const lexer = new JavaLexer.Java9Lexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JavaParser.Java9Parser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.compilationUnit();
  tree.accept(new Visitor());
}

const getSelectedErrors = (numOfErrors) => 
{
    helperInstance.removeInitialisers();
    const errList = helperInstance.selectErrors(numOfErrors);
    return errList;
}

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }
    if(ctx.identifier  != null)
    {
        const lineNum = ctx.start.line;
        const linePos = ctx.start.column;
        const id = ctx.getText();
        const varNames = require('../varNames.js').varNames;
        if (id === "String" || id === "int")
        {
            // Gets the keywords that will be changed and adds a keyword error.
            const mispell = mispellWord(id);
            helperInstance.addError(lineNum,linePos,id,mispell,"Keyword");
        }
        else if (varNames.includes(id))
        {
            // Gets the variable occurrences that will be changed and adds a variable error.
            const mispell = mispellWord(id);
            helperInstance.addError(lineNum,linePos,id,mispell,"Variable");
        }
    }
    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.accept(this);
        }
      });
    }
  }

  visitTerminal(ctx)
  {
    const symbol = ctx.getText();
    if( symbol === ";" || symbol === "=")
    {
        const lineNum = ctx.getSymbol().line;
        const linePos = ctx.getSymbol().column;
        helperInstance.addError(lineNum,linePos,symbol,"","Punctuation");
    }
  }
}

const mispellWord = (word) =>
{
    const random = require('../templateRandomiser.js').randomInt;
    //Mispell the word or change case so the word is slightly wrong.
    if(word === "int")
    {
        const intCombos = ["Int","integer","Integer","String","string","str","Str","i","s"];
        const index = random(intCombos.length) - 1;
        return intCombos[index];
    }
    else if (word === "String")
    {
        const strCombos = ["Int","integer","Integer","int","string","str","Str","i","s"];
        const index = random(strCombos.length) - 1;
        return strCombos[index];
    }
    else
    {
        const wordCombos = [word.toUpperCase()]
        for(var i = 0; i < word.length; i++)
        {
            wordCombos.push(word.replace(word[i],randomLetter(word[i])))
            wordCombos.push(word + randomLetter(""));
        }
        const index = random(wordCombos.length) -1;
        return wordCombos[index];
    }
}

const randomLetter = (origLetter) =>
{
    const random = require('../templateRandomiser.js').randomInt;
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    const index = random(letters.length-1);
    if(letters[index] === origLetter)
    {
        return letters[(index + 1) % letters.length];
    }
    return letters[index];
} 


module.exports = { 
    getSelectedErrors: getSelectedErrors,
    runVisitor: runVisitor,
};
