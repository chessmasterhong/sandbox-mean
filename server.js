// Require needed modules
var express = require('express');

// Define custom config variables
var HOST = '127.0.0.1',
    PORT = 8080;

// Create an Express application
var app = express();

// Get an instance of the Express Router
var router = express.Router();

// Register router routes by prefixing routes with /api

require('./routes')(router);

app.use('/api', router);

// Set the static files location
// /public/index.html on the server will be /index.html to the client
app.use(express.static('./public'));

// Start application server on specified host and port
app.listen(PORT, HOST, function() {
    console.log('Express server started on ' + HOST + ':' + PORT);
});

