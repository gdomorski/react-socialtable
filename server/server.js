var express = require('express');
    pg = require('pg'),
    app = express(),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    csv = require('fast-csv'),
    User = require('./db/db').User,
    port = process.env.PORT || 8080,
    count = 0,
    server = app.listen(port, function() {
        console.log("Server listening on: http://localhost:%s", port);
    });

// fs.createReadStream("user_data.csv")
//     .pipe(csv())
//     .on("data", function(data){
//       var currentId = parseInt(data[0]);
//       count = (count > currentId) ? count : currentId;
//       console.log(count)
//       User.create({
//         id: data[0],
//         fname: data[1] + " " + data[2],
//         username: data[3],
//         age: data[7],
//         likes: data[9],
//       })
//     })
//     .on("end", function(data){
//         console.log("done");
//     });


//POSTGRESQL
var conString = 'postgres://localhost:5432/';
var client = new pg.Client(conString);
client.connect();

app.use(express.static(__dirname + '/../client'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./routes.js')(app, express);
