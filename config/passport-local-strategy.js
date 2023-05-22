//import user
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//need to tell passport to use local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true, // Pass the req object to the callback function
    },
    function (req, email, password, done) {
      //find user by email and establish identity
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log("Error in finding user----> passport");
          return done(err);
        }
        if (!user || user.password != password) {
          console.log("Invlid username/password");
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  //passport encrypts the userId data and put it into cookie
  done(null, user.id);
});

//deserializing the user from the key in the cookies
passport.deserializeUser(function (id, done) {
  //find the user by id and return it
  User.findById(id, function (err, user) {
    if (err) {
      console.log("Error in finding user----> passport");
      return done(err);
    }
    return done(null, user);
  });
});

module.exports = passport;
