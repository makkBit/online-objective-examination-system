var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./Question');

var examSchema = Schema({
	name: String,
	code: Number,
	registeredStudent: [String]
});

module.exports = mongoose.model('Exam', examSchema);