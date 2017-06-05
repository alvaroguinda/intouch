//File: routes/classes.js
module.exports = function(app) {

    // File: controllers/classes.js
    var Classes = require('../models/classes.js');

    //GET - Return all classes in the DB
    findAllClassess = function(req, res) {
        Classes.find(function(err, classes) {
            if (!err) {
                console.log('GET /classes')
                res.send(classes);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a Classes with specified name
    findByName = function(req, res) {
        Classes.findOne({ 'name': req.params.name }, function(err, classes) {
            if (!err) {
                console.log('GET /classes/' + req.params.name);
                res.send(classes);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new Classes in the DB
    addClasses = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var classes = new Classes({
            pictures: req.body.email,
            level: req.body.level,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            categories: req.body.categories,
            material: req.body.material,
            participants: req.body.participants,
            duration: req.body.duration,
            location: req.body.location,
            califications: req.body.califications,
        });

        classes.save(function(err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(classes);
    };

    //PUT - Update a register already exists
    updateClasses = function(req, res) {
        Classes.findById(req.params.email, function(err, classes) {
            pictures: req.body.pictures;
            level: req.body.level;
            name: req.body.name;
            description: req.body.description;
            price: req.body.price;
            categories: req.body.categories;
            material: req.body.material;
            participants: req.body.participants;
            duration: req.body.duration;
            location: req.body.location;
            califications: req.body.califications;

            classes.save(function(err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(classes);
            });
        });
    }

    //DELETE - Delete a Classes with specified ID
    deleteClasses = function(req, res) {
        Classes.findById(req.params.id, function(err, classes) {
            classes.remove(function(err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/classes', findAllClassess);
    app.get('/classes/:name', findByName);
    app.post('/classes', addClasses);
    app.put('/classes/:email', updateClasses);
    app.delete('/classes/:name', deleteClasses);
}