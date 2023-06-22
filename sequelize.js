const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-mysql-registration-login-api', 'root', 'Mahesh@1996', {
  host: 'localhost',
  dialect: 'mysql'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
