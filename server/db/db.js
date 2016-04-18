var Sequelize = require("sequelize");

var db = new Sequelize('twitter_users', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

var User = db.define('user', {
  fname: Sequelize.STRING,
	username: {type: Sequelize.STRING, unique: true},
	age: Sequelize.INTEGER,
	likes: Sequelize.INTEGER,
});

User.sync()
  .then(function() {
    console.log('User is in PostgreSQL db');
});

module.exports = {
  User: User
}

