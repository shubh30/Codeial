const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done) {
        // find the user and establishing the identity
        User.findOne({email: email}, function(err, user) {
            if(err) {
                console.log('Error in finding user --> Passport');
                return done(err);
            }

            if(!user || user.password != password){
                console.log('Invalid Username / Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

// Serializing the user to see which key is to be kept in the user
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// deserializing the user from the key in the user
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});

// Check if user is authenticated
passport.checkAuthentication = function(req, res, next) {
    // if user is signed in then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()) {
        return next();
    }

    // If user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next) {
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookies and we are just sending in to the local for the views
        res.locals.user = req.user;
    }

    next(); 
}

module.exports = passport;

