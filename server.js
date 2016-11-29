var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    router = express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(router);

app.get('/', function (req, res) {
    res.send('Sevillin');
});

routes = require('./routes/persons.js')(app);

mongoose.connect('mongodb://localhost/curso', function (err, res) {
    if (err) {
        console.log('pelas...');
    } else {
        console.log('ya te conectaste...');
    }
})

app.listen(3000, function () {
    console.log('Mi primer server con node...');
})