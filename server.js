var express = require('express');

var PORT = 8080;

var app = express();

var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        title: 'Hello API',
        message: 'How are you?'
    });
});

app.use('/api', router);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
});

