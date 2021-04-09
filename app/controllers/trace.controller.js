const helper = require('../lib/trace/traceHelper.js');

const getTraceQuestion = (req,res) =>
{
    const questionCode = generateCode();
    const traceTable = generateTraceTable();
    return res.send(getJSONTrace(questionCode,traceTable));
}

const generateCode = () =>
{
    // Generate a list of the operations that will be generated and the type it will be (recursion, while or for)

    const types = ["Recursion", "For", "While"];
    

    // Store in a data structure similar to that of the operations table

    // Generate the code for the program from the data structure

    // Return the full code to the controller
}

const generateTraceTable = () =>
{
    // Use the data structure to run with the tracer

    // Create a trace table to store the results for each part of the program

    // Return this data structure to the controller
}

const getJSONTrace = (questionCode,traceTable) =>
{
    var JSONArray = [];
    const JSONObject = {
        "questionCode": questionCode,
        "traceTable": JSONArray,
    }
    return JSON.stringify(JSONObject);
}

module.exports = 
{
    getTraceQuestion: getTraceQuestion,
}