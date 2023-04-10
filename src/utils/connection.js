const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('e_commerce', 'postgres', 'root', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
});

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error))

sequelize.sync( { force: false } )
    .then(() => console.log('Sync has been established successfully.'))
    .catch((error) => console.error('Unable to sync to the database:', error))

module.exports = sequelize;

