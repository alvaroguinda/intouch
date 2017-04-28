//File: routes/users.js
module.exports = function(app) {

    // File: controllers/users.js
    var User = require('../models/user.js');

    //GET - Return all users in the DB
    findAllUsers = function(req, res) {
        User.find(function(err, users) {
            if (!err) {
                console.log('GET /users')
                res.send(users);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a User with specified ID
    findById = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (!err) {
                console.log('GET /user/' + req.params.id);
                res.send(user);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a User with specified username
    findByUsername = function(req, res) {
        User.findById(req.params.username, function(err, user) {
            if (!err) {
                console.log('GET /user/' + req.params.username);
                res.send(user);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new User in the DB
    addUser = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var user = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            identification: req.body.identification,
            picture: req.body.picture,
            description: req.body.description,
        });

        user.save(function(err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(user);
    };

    //PUT - Update a register already exists
    updateUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            name: req.body.name;
            email: req.body.email;
            username: req.body.username;
            password: req.body.password;
            phone: req.body.phone;
            address: req.body.address;
            identification: req.body.identification;
            picture: req.body.picture;
            description: req.body.description;

            user.save(function(err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(user);
            });
        });
    }

    //DELETE - Delete a User with specified ID
    deleteUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            user.remove(function(err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/users', findAllUsers);
    app.get('/user/:id', findById);
    app.get('/user/:username', findByUsername);
    app.post('/user', addUser);
    app.put('/user/:id', updateUser);
    app.delete('/user/:id', deleteUser);
}