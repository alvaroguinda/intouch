//File: routes/trainers.js
module.exports = function(app) {

    // File: controllers/trainers.js
    var Trainer = require('../models/trainer.js');

    //GET - Return all trainers in the DB
    findAllTrainers = function(req, res) {
        Trainer.find(function(err, trainers) {
            if (!err) {
                console.log('GET /trainers')
                res.send(trainers);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a Trainer with specified email
    findByEmail = function(req, res) {
        Trainer.findOne({ 'email': req.params.email }, function(err, trainer) {
            if (!err) {
                console.log('GET /trainer/' + req.params.email);
                res.send(trainer);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new Trainer in the DB
    addTrainer = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var trainer = new Trainer({
            email: req.body.email,
            name: req.body.name,
            habilities: req.body.habilities,
            phone: req.body.phone,
            address: req.body.address,
            identification: req.body.identification,
            picture: req.body.picture,
            description: req.body.description,
            password: req.body.password,
        });

        trainer.save(function(err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(trainer);
    };

    //PUT - Update a register already exists
    updateTrainer = function(req, res) {
        Trainer.findById(req.params.email, function(err, trainer) {
            email: req.body.email;
            name: req.body.name;
            habilities: req.body.habilities;
            phone: req.body.phone;
            address: req.body.address;
            identification: req.body.identification;
            picture: req.body.picture;
            description: req.body.description;
            password: req.body.password;

            trainer.save(function(err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(trainer);
            });
        });
    }

    //DELETE - Delete a Trainer with specified ID
    deleteTrainer = function(req, res) {
        Trainer.findById(req.params.id, function(err, trainer) {
            trainer.remove(function(err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/trainers', findAllTrainers);
    app.get('/trainer/:email', findByEmail);
    app.post('/trainer', addTrainer);
    app.put('/trainer/:email', updateTrainer);
    app.delete('/trainer/:email', deleteTrainer);
}