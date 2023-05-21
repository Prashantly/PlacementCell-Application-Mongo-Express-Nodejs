module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "Profile",
  });
};

//render the signIn page
module.exports.getSignin = function (req, res) {
  return res.render("user_signin", {
    title: "Sign In",
  });
};

//render the signUp page
module.exports.getSignup = function (req, res) {
  return res.render("user_signup", {
    title: "Sign Up",
  });
};
