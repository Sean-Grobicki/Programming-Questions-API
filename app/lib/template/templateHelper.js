const getRandomInt = (max) => { 
    return require('../globalHelper.js').getRandomInt(max); 
};

class TemplateHelper
{
    constructor()
    {
        this.variables = [];
    }

    addVariable(oldName,type)
    {
        this.variables.push(new Variable(oldName,type));
    }

    getVariable(oldName)
    {
        this.variables.forEach(variable => {
            if(variable.getOldName() === oldName)
            {
                return variable;
            }
        });
        return null;
    }

    isSameName(name)
    {
        this.variables.forEach(variable => {
            if(variable.getNewName() === name)
            {
                return true;
            }
        });
    }

    getVariables()
    {
        return this.variables;
    }
}


class Variable
{
    constructor(oldName,type)
    {
        this.oldName = oldName;
        this.type = type;
        this.newName = getVarName();
        this.generateValue();
    }

    getOldName()
    {
       return this.oldName;
    }

    getNewName()
    {
        return this.newName;
    }

    getValue()
    {
        return this.value;
    }

    getType()
    {
        return this.type;
    }

    generateValue()
    {
        if(this.type === "int")
        {
            this.value = getRandomInt(10);
        }
    }

}



const getVarName = () => 
{
    //const otherVarNames = 
    const varNames = require('../varNames.js').varNames;
    const varName = varNames[getRandomInt(varNames.length)-1];
    //Check varName isn't the same as any other variables.
    const helperInstance = require('./templateRandomiser.js').helperInstance;
    if (!helperInstance.isSameName(varName))
    {
        return varName;
    }
    else
    {
        return getVarName();
    }
}


module.exports = { Helper: TemplateHelper, Variable: Variable};
