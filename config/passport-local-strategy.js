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
    async function (req, email, password, done) {
      try {
        //find user by email and establish identity
        const user = await User.findOne({ email: email });
        if (!user || user.password != password) {
          console.log("Invlid username/password");
          return done(null, false);
        }

        //if username and password are valid, return the user
        return done(null, user);
      } catch (err) {
        console.log("Error in finding user ----> passport", err);
        return done(err);
      }
    }
  )
);

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  //passport encrypts the userId data and put it into cookie
  done(null, user.id);
});

//deserializing the user from the key in the cookies
passport.deserializeUser(async function (id, done) {
  try {
    // Find the user by id
    const user = await User.findById(id);
    return done(null, user);
  } catch (err) {
    console.log("Error in finding user ----> passport");
    return done(err);
  }
});

module.exports = passport;
