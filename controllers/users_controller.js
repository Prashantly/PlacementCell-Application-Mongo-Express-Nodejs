const { closeDelimiter } = require("ejs");
const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "Profile",
  });
};

//render the signIn page
module.exports.getSignin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_signin", {
    title: "Sign In",
  });
};

//render the signUp page
module.exports.getSignup = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_signup", {
    title: "Sign Up",
  });
};

//get the sign-up data and create user
module.exports.create = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;

    // if password doesn't match
    if (password !== confirm_password) {
      return res.status(400).send("Passwords do not match");
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).send("Email already registered");
    }

    // create a new user
    const newUser = await User.create({
      username,
      email,
      password,
    });

    // success flash message
    // req.flash("success", "Account created!");
    return res.redirect("/users/signin");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

// sign in c=and create session for user
module.exports.createSession = function (req, res) {
  console.log("You are successfully loggedin");
  return res.redirect("/");
};
