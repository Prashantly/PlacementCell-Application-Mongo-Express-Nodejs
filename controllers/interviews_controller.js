const Interview = require("../models/interview");

module.exports.addInterview = function (req, res) {
  return res.render("add_interview", {
    title: "Schedule an interview",
  });
};
