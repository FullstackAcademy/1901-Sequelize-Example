const router = require('express').Router();
const { Users } = require('../../db/models');

router.get('/users/:id', (req, res, next) => {
    const { params: { id } } = req;

    console.log('ID: ', id);

    Users
        .findByPk(parseInt(id))
        .then((user) => {
            if (!user) res.sendStatus(404);
            const { name, email } = user;

            res.send({
                user: {
                    email,
                    name: name || '',
                },
            });
        })
        .catch(next);
});

router.get('*', (req, res) => {
    Users
        .findAll()
        .then((users) => {
            res.send({ users: users.map(({ name, email }) => ({
                name: name || '',
                email,
            }))});
        });
});

module.exports = router;
