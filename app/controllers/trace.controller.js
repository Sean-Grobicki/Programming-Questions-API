const getTraceQuestion = (req,res) =>
{
    return res.send({"msg": "trace get is working"});
}


module.exports = 
{
    getTraceQuestion: getTraceQuestion,
}