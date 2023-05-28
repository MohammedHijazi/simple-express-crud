const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('simple-crud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

// test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // sync the model with the database
    User.sync()
      .then(() => {
        console.log('User table has been synced');
      })
      .catch(err => console.error('An error occurred while creating the table:', err));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  sequelize,
  User
};
