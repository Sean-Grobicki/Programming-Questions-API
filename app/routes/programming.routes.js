const programming = require('../controllers/programming.controller');


module.exports = function(app)
{
    app.get("/programming",programming.getProgrammingQuestion);

    app.post("/programming",programming.markProgrammingQuestion);
}





