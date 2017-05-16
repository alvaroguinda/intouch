//File: app.js

var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.get('/', function(req, res) {
    res.send("Hello world!");
});

routesUsers = require('./routes/users')(app);
routesTrainer = require('./routes/trainer')(app);
routesConsumer = require('./routes/consumer')(app);
routesTutorial = require('./routes/tutorial')(app);
routesClasses = require('./routes/classes')(app);
routesQualification = require('./routes/qualification')(app);
routesCategory = require('./routes/category')(app);
routesCalendar = require('./routes/calendar')(app);

mongoose.connect('mongodb://localhost/users', function(err, res) {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

server.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});