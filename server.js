const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

// App goes here

require('./app/routes/grammar.routes')(app);
require('./app/routes/programming.routes')(app);
require('./app/routes/trace.routes')(app);


const port = process.env.port || 3333;

app.listen(port, () => console.log(`Listening on port ${port} ...`));