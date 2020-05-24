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

module.exports = passport;

