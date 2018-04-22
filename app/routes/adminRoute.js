/*******************************
********** ADMIN ROUTES*********
*******************************/
const passportService = require('../services/passport');
const passport = require('passport');
var StudentController = require('../controllers/StudentController');
var studentController = new StudentController();

module.exports = function(app, passport){


	app.get('/', function(req, res) {
        res.render('home/index');
    });


    app.route('/adminsignin')
        .get(function(req, res) {
            // render the page and pass in any flash data if it exists
            if (req.isAuthenticated())
                res.redirect('/admindashboard');
            res.render('admin/adminsignin', { 
                message: req.flash('loginMessage') 
            }); 
        })
        .post(passport.authenticate('admin-signin', {
            successRedirect : 'admindashboard', // redirect to the secure profile section
            failureRedirect : 'adminsignin', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


    app.get('/admindashboard', isSignedIn, function(req, res) {
        res.render('admin/admindashboard', {
            user : req.user.email // get the user out of session and pass to template
        });
    });


    app.get('/adminlogout', isSignedIn, function(req, res) {
        req.logout();
        res.redirect('/adminsignin');
    });


	app.post('/adminsignup', passport.authenticate('admin-signup'), function(req, res){
        res.send({success: 'true'});
    });


    app.get('/admin/viewresult', isSignedIn, function(req, res) {
        res.render('admin/viewresult');
    });

    app.get('/admin/viewresult/:email', isSignedIn, studentController.retrieveResult);


    // route middleware to make sure a user is logged in
    function isSignedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();
        // if they aren't, redirect them to the login
        res.redirect('/adminsignin');
    }

};