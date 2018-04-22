'use strict';
var Student = require('../model/Student.js');
var Question = require('../model/Question.js');

var StudentController = function(){


	this.giveExam = function(req, res){
		const examcode = req.user.examcode;
		Question.find({'ofExam': req.user.examcode}, function (err, docs) {
			if (err) { return next(err); }
			res.render('exam/giveexam',{
				'questions': docs
			});
		});
	};

	this.addAnswer = function(req, res){

		var myQuestionId = req.body.questionId;
		var myAnswer = Number(req.body.answer);
		
		Student.findOne({ _id: req.user._id }, function (err, student){
		  
		  if(err) { return next(err); }

		  Question.find({'_id': myQuestionId}, function (err, question) {

		  	if(err) { return next(err); }
		  	var a = false; 
		  	if(question[0].options[myAnswer-1].correct === true){
		  		a = true;
		  	}
		  	res.json({'result': a});

		  	student.answer.push({ questionId: myQuestionId, answeredCorrect: a});
		  	student.save();
		  });

		});

	};

	this.retrieveResult = function(req, res){

		Student.findOne({ email: req.params.email }, function (err, student){
			if(err) { return next(err); }
			res.json(student);
		});

	};

};

module.exports = StudentController;