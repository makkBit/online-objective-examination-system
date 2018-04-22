var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var studentSchema = mongoose.Schema({
    email        : {type:String, lowerCase: true },
    password     : String,
    name         : String,
    fathername   : String,
    dob          : Date,
    examcode     : Number,
    answer  : [{ 
		questionId: String,
		answeredCorrect: Boolean
	}]
 });

studentSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

studentSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Student', studentSchema);