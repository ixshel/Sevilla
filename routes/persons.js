module.exports = function (app) {
    var Person = require('../models/person.js');

    // Get all persons in the DB
    findAllPersons = function (req, res) {
        Person.find(function (err, persons) {
            if (!err) {
                res.status(200).json(persons);
            } else {
                console.log('error' + err);
            }
        })
    };

    // Get by ID
    findById = function (req, res) {
        Person.findById(req.params.id, function (err, person) {
            if (!err) {
                res.send(person);
            } else {
                console.log('Err' + err);
            }
        })
    };

    // Add one new
    newPerson = function (req, res) {
        var person = new Person({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender
        });

        person.save(function (err, person) {
            if (!err) {
                console.log('create new one');
            } else {
                console.log('err' + err);
            }
            res.send(person)
        })
    }

    // Delete
    removeOne = function (req, res) {
        Person.findById(req.params.id, function (err, person) {
            // where magic happens...
            person.remove(function (err) {
                if (!err) {
                    console.log('remove');
                } else {
                    console.log('Err' + err);
                }
            })
        })
    }

    // link routes and functions
    app.get('/persons', findAllPersons);
    app.get('/person/:id', findById);
    app.post('/person', newPerson);
    app.delete('/remove/:id', removeOne);
};