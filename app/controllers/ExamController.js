'use strict';
var Exam = require('../model/Exam.js');
var Question = require('../model/Question.js');

var ExamController = function(){


	this.addExam = function(req, res){
		var title = req.body.title;
		var code = req.body.code;

		var exam = new Exam();
		exam.name = title;
		exam.code = code;

		exam.save(function(err){
			if(err) { return next(err); }
			res.redirect('/admin/viewexam');
		});
	};

	this.deleteExam = function(req, res){
		Exam.remove({'code': req.body.examcode}, function(err){
			if(err) { return next(err); }
			res.redirect('/admin/viewexam');
		});
	};


	this.getExams = function(req, res){
		Exam.find( {} )
		.exec(function(err, result){
			if(err) { return next(err); }
			res.json(result);
		});
	};


};

module.exports = ExamController;