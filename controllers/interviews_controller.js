const Interview = require("../models/interview");

module.exports.addInterview = function (req, res) {
  return res.render("add_interview", {
    title: "Schedule an interview",
  });
};

// creation of new Interview
module.exports.createInterview = async (req, res) => {
  try {
    const { company, date } = req.body;

    //create interview
    const interview = new Interview({
      company,
      date,
    });
    await interview.save();
    console.log(interview);
    // req.flash("success", "Interview added!");
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Error in creating interview",
    });
  }
};
