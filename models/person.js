var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var personSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    gender: { type: String, enum: ['male', 'female'] }
});

module.exports = mongoose.model('Person', personSchema);