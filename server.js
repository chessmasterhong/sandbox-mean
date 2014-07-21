var express = require('express');

var PORT = 8080;

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
});
