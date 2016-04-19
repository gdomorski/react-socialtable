var Sequelize = require("sequelize");
var db;
if (process.env.PORT) {
  db = new Sequelize("d9veam8sf1mste", "sxngmhdhidhcym", "sItWtmfNTR1ff6oF6Q6i1i0W3B", {
    host: 'ec2-23-21-215-184.compute-1.amazonaws.com',
    dialect: 'postgres'
  });
} else {
  db = new Sequelize('twitter_users', '', '', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  })
}

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

