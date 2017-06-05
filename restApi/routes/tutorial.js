//File: routes/tutorial.js
module.exports = function(app) {

    // File: controllers/tutorial.js
    var Tutorial = require('../models/tutorial.js');

    //GET - Return all tutorial in the DB
    findAllTutorials = function(req, res) {
        Tutorial.find(function(err, tutorial) {
            if (!err) {
                console.log('GET /tutorial')
                res.send(tutorial);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a Tutorial with specified name
    findByName = function(req, res) {
        Tutorial.findOne({ 'name': req.params.name }, function(err, tutorial) {
            if (!err) {
                console.log('GET /tutorial/' + req.params.name);
                res.send(tutorial);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new Tutorial in the DB
    addTutorial = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var tutorial = new Tutorial({
            pictures: req.body.email,
            level: req.body.level,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            categories: req.body.categories,
            material: req.body.material,
            califications: req.body.califications,
        });

        tutorial.save(function(err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(tutorial);
    };

    //PUT - Update a register already exists
    updateTutorial = function(req, res) {
        Tutorial.findById(req.params.email, function(err, tutorial) {
            pictures: req.body.pictures;
            level: req.body.level;
            name: req.body.name;
            description: req.body.description;
            price: req.body.price;
            categories: req.body.categories;
            material: req.body.material;
            califications: req.body.califications;

            tutorial.save(function(err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(tutorial);
            });
        });
    }

    //DELETE - Delete a Tutorial with specified ID
    deleteTutorial = function(req, res) {
        Tutorial.findById(req.params.id, function(err, tutorial) {
            tutorial.remove(function(err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/tutorial', findAllTutorials);
    app.get('/tutorial/:name', findByName);
    app.post('/tutorial', addTutorial);
    app.put('/tutorial/:email', updateTutorial);
    app.delete('/tutorial/:name', deleteTutorial);
}