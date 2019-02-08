const router = require('express').Router();
const { Tasks } = require('../../db/models');

router.get('/tasks/:id', (req, res, next) => {
    const { params: { id } } = req;

    console.log('ID: ', id);

    Tasks
        .findByPk(parseInt(id))
        .then((task) => {
            if (!task) res.sendStatus(404);
            const { name } = task;

            res.send({
                task: {
                    name,
                },
            });
        })
        .catch(next);
});

router.get('*', (req, res) => {
    Tasks
        .findAll()
        .then((tasks) => {
            res.send({ tasks: tasks.map(({ name }) => ({ name })) });
        });
});

module.exports = router;
