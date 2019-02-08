const server = require('./api');

server()
    .then((app) => {
        app.listen(3000, () => { console.log('Server started!'); });
    });
