/*******************************
**********Exam ROUTES***********
*******************************/
var ExamController = require('../controllers/ExamController');
var examController = new ExamController();

module.exports = function(app, passport){

	// 	CREATE
    app.get('/admin/addexam', isSignedIn, function(req, res){
        res.render('exam/addexam');
    });
    app.post('/admin/addexam', examController.addExam);


    // RETRIEVE
    app.get('/admin/viewexam', isSignedIn, function( req, res){
        res.render('exam/viewexam');
    });
    app.get('/api/viewexam', isSignedIn, examController.getExams);


    // DELETE
    app.get('/admin/deleteexam', isSignedIn, function(req, res){
    	res.render('exam/deleteexam');
    });
    app.post('/admin/deleteexam', isSignedIn, examController.deleteExam);


     // route middleware to make sure a user is logged in
    function isSignedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();
        // if they aren't, redirect them to the login
        res.redirect('/adminsignin');
    }

}


 