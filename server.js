// Require needed modules
var express = require('express');

// Define custom config variables
var HOST = '127.0.0.1',
    PORT = 8080;

// Create an Express application
var app = express();

// Get an instance of the Express Router
var router = express.Router();

// Router will handle any requests with this endpoint depending on where router is "use()'d.
router.get('/hello', function(req, res) {
    // Returns a JSON response when user visits this endpoint
    res.json({
        title: 'Hello API',
        message: 'How are you?'
    });
});

router.get('/bye', function(req, res) {
    res.json({
        title: 'Goodbye API',
        message: 'See you soon.'
    });
});

// Register router routes by prefixing routes with /api
app.use('/api', router);

// Set the static files location
// /public/index.html on the server will be /index.html to the client
app.use(express.static('./public'));

// Start application server on specified host and port
app.listen(PORT, HOST, function() {
    console.log('Express server started on ' + HOST + ':' + PORT);
});

