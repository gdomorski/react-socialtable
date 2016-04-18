var User = require('./db/db').User;

module.exports = function (app, express) {
 app.get('/api/allusers', function (req, res) {
   User.findAll()
   .then(function(allusers){
   		res.send(allusers);
   })
 });

 app.post('/api/allusers', function (req, res) {
  console.log(req.body)
    User.create({
      id: "" + ++count,
      fname: req.body.fname,
      username: req.body.username,
      age: parseInt(req.body.age),
      likes: parseInt(req.body.likes)
    }).then(function(err, user, fields) {
      if (err) {
        res.send(err);
      }
      res.send(user);
    });
  });
};