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
        //Create a list of ids of the errors in the list
        var errIDList = [];
        this.errors.forEach(error => {
            errIDList.push(error.errorID);
        })
        // Choose an amount numbers from that array which won't have gaps
        var selectedErrorsIDList = [];
        for (let index = 0; index < numberOfErrors; index++) 
        {
            const random = require('../templateRandomiser.js').randomInt;
            const errIndex = random(errIDList.length) - 1;
            const errID = errIDList[errIndex];
            selectedErrorsIDList[index] = errID;
            errIDList = errIDList.filter((value,index) => {
                return value !== errID;
            } );
        }
        // Foreach through errors list checking if the ID is in the list of errors then add to own list
        var randListErrors = [];
        this.errors.forEach(error => {
            if(selectedErrorsIDList.includes(error.errorID))
            {
                randListErrors.push(error);
            }
        })
        return randListErrors;   
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
        this.errorValue = "";
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


module.exports = 
{
    GrammarHelper: GrammarHelper,
};



