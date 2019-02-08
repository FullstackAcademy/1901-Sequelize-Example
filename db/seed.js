const { Projects, Tasks, Users } = require('./models');
const initDb = require('./index');

const seedDb = () => {
    const initProjects = () => Projects.create({
        name: 'Sequelize Workshop',
    });

    const initTasks = () => Promise.all([
        Tasks.create({ name: 'Lecture' }),
        Tasks.create({ name: 'Review' }),
    ]);

    const initUsers = () => Promise.all([
        Users.create({
            email: 'eliot@eliot.com',
            name: 'Eliot Szwajkowski',
        }),
        Users.create({
            email: 'prof@prof.com',
            name: 'Eric Katz',
        }),
    ]);

    const initAll = () => Promise.all([
        initProjects(),
        initTasks(),
        initUsers(),
    ]);

    return initDb(true)
        .then(initAll)
        .then(([project, tasks, users]) => {
            const [ eliot, prof ] = users;
            const [ lecture, review ] = tasks;

            return Promise.all([
                project.setTasks(tasks),
                project.setUsers(users),
                eliot.setTasks([lecture]),
                prof.setTasks([review]),
            ]);
        })
        .then(() => {
            console.log('Successfully seeded database.');
        })
        .catch(e => console.error(e));
};

seedDb()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
