const newrelic = require('newrelic');
const app = require('./app.js');
app.locals.newrelic = newrelic;

let port = process.env.PORT || 3002;
app.listen(port, () => console.log('Express listening on port ', port));
