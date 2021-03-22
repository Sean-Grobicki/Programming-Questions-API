class GrammarHelper
{
    constructor()
    {
        this.errors = [];
    }

    addError(errLineNum, errLinePos, errMissValue, errValue, errType)
    {
        var err;
        const errorID = this.errors.length;
        if (errType === "Punctuation")
        {
            err = new PunctuationError(errorID,errLineNum,errLinePos,errMissValue);
        }
        else if (errType === "Variable")
        {
            err = new VariableError(errorID,errLineNum,errLinePos,errMissValue,errValue);
        }
        else if (errType === "Keyword")
        {
            err = new KeywordError(errorID,errLineNum,errLinePos,errMissValue,errValue);
        }
        this.errors.push(err);
    }

    getAllErrors()
    {
        return this.errors;
    }

    selectErrors(numberOfErrors)
    {
        for (let index = 0; index < numberOfErrors; index++) 
        {
            //Select a random number error from the list.
            //Ensure no repeat selections
        }   
    }

    removeInitialisers()
    {
        //Remove first occurences of variable errors and maybe mispelling of string in args.
        var variablesSeen = [];
        this.errors.forEach(error => {
            if(error instanceof VariableError)
            {
                if(!variablesSeen.includes(error.missingValue))
                {
                    variablesSeen.push(error.missingValue);
                    this.errors = this.errors.filter((value,index) => {
                        return value.errorID != error.errorID;
                    } )
                }
            }
        });
    }
}

class Error
{
    constructor(errId,errorNum,errorPos,missValue)
    {
        this.errorID = errId;
        this.errorLineNum = errorNum;
        this.errorLinePos = errorPos;
        this.missingValue = missValue;
    }

    getDescription()
    {
        return "";
    }
}


class PunctuationError extends Error
{
    constructor(errId,errorNum,errorPos,missValue)
    {
        super(errId,errorNum,errorPos,missValue);
        this.description = "Missing a " + this.missingValue + " on line " + this.errorLineNum + " position " + this.errorLinePos + ". ";
    }

    getDescription()
    {
        return this.description;
    }

    getLineNum()
    {
        return this.errorLineNum;
    }

    getLinePos()
    {
        return this.errorLinePos;
    }

}


class VariableError extends Error
{
    constructor(errId,errorNum,errorPos,missValue,errValue)
    {
        super(errId,errorNum,errorPos,missValue);
        this.errorValue = errValue;
        this.description = "Variable " + this.errorValue + " does not exist called on line " + this.errorLineNum + " position " + this.errorLinePos + ". ";
    }

    getDescription()
    {
        return this.description;
    }

}

class KeywordError extends Error
{
    constructor(errId,errorNum,errorPos,missValue,errValue)
    {
        super(errId,errorNum,errorPos,missValue);
        this.errorValue = errValue;
        this.description = "Incorrect keyword " + this.errorValue + " expected " + this.missingValue + " on line " + this.errorLineNum + " position " + this.errorLinePos + ". ";
    }

    getDescription()
    {
        return this.description;
    }
}

const helperInstance = new GrammarHelper();

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
        const varNames = require('./varNames.js').varNames;
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
    const random = require('./templateRandomiser.js').randomInt;
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
    const random = require('./templateRandomiser.js').randomInt;
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    const index = random(letters.length-1);
    if(letters[index] === origLetter)
    {
        return letters[(index + 1) % letters.length];
    }
    return letters[index];
} 

module.exports = { Helper: GrammarHelper, Visitor: Visitor, helperInstance: helperInstance,};