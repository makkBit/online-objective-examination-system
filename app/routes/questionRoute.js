/*******************************
**********Question ROUTES*******
*******************************/
var QuestionController = require('../controllers/QuestionController');
var questionController = new QuestionController();

module.exports = function(app, passport){

	app.get('/admin/addquestion', isSignedIn, function (req, res) {
		res.render('question/addquestion');
	});

	app.post('/admin/addquestion', isSignedIn, questionController.addQuestion);

	app.get('/admin/viewquestions', isSignedIn, function(req, res){
		res.render('question/viewquestions');
	});

	app.post('/api/viewquestions', isSignedIn, questionController.getQuestions);


	app.post('/api/viewquestion', questionController.getQuestion);


	 // route middleware to make sure a user is logged in
	function isSignedIn(req, res, next) {
	    // if user is authenticated in the session, carry on 
	    if (req.isAuthenticated())
	        return next();
	    // if they aren't, redirect them to the login
	    res.redirect('/adminsignin');
	}

}


