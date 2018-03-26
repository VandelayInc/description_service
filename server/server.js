const app = require('./app.js');

// const newrelic = require('newrelic');
// app.locals.newrelic = newrelic;

let port = process.env.PORT || 3002;
app.listen(port, () => console.log('Express listening on port ', port));
