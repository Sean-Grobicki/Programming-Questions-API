const grammar = require('../controllers/grammar.controller');


module.exports = function(app) 
{
    app.get("/grammar",grammar.getGrammarQuestion);
}