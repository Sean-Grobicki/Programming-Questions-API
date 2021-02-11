const trace = require('../controllers/trace.controller');

module.exports = function(app)
{
    app.get("/trace",trace.getTraceQuestion);
}
