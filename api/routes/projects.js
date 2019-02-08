const router = require('express').Router();
const { Projects } = require('../../db/models');

router.get('/projects/:id', (req, res, next) => {
    const { params: { id } } = req;

    console.log('ID: ', id);

    Projects
        .findByPk(parseInt(id))
        .then((project) => {
            if (!project) res.sendStatus(404);
            const { name } = project;

            res.send({
                project: {
                    name,
                },
            });
        })
        .catch(next);
});

router.get('*', (req, res) => {
    Projects
        .findAll()
        .then((projects) => {
            res.send({ projects: projects.map(({ name }) => ({ name })) });
        });
});

module.exports = router;
