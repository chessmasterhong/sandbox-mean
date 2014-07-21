module.exports = function(router) {
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
}