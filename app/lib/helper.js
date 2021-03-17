// In the lib file any helper class files will go but the controller is like the main when each request is called.

class Helper
{
    constructor()
    {
        this.variables = [];
    }

    addVariable(oldName,type)
    {
        variables.push(new Variable(oldName,type));
    }

    getVariable(oldName)
    {
        variables.forEach(variable => {
            if(variable.getOldName() === oldName)
            {
                return variable;
            }
        });
    }
}


class Variable
{
    constructor(oldName,type)
    {
        this.oldName = oldName;
        this.type = type;
        this.newName = this.generateName();
        this.value = this.generateValue();
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

    generateName()
    {
        //Need to check it's not a keyword and isnt the same as any other variables.
    }

    generateValue()
    {
        //Generate only for integers random numbers between 1 and 10.
    }

}

module.exports = { Helper: Helper, };