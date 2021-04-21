const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json())
// App goes here

require('./app/routes/grammar.routes')(app);
require('./app/routes/programming.routes')(app);
require('./app/routes/trace.routes')(app);


const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Listening on port ${port} ...`));
