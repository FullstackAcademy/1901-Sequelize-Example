const express = require('express');
const initDb = require('../db');
const { tasksRouter, usersRouter, projectsRouter } = require('./routes');
const app = express();

app.use(express.json());

const apiRouter = express.Router();

apiRouter.get('/tasks/**', tasksRouter);
apiRouter.get('/users/**', usersRouter);
apiRouter.get('/projects/**', projectsRouter);

app.use('/api', apiRouter);

app.all('*', (req, res) => {
    console.log('Request hit end of possibilities, returning 404.');
    res.sendStatus(404);
});

const initializeServer = () => initDb()
    .then(() => {
        return app;
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });

module.exports = initializeServer;
