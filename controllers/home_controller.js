const Student = require("../models/student");

module.exports.home = async (req, res) => {
  try {
    //get all students from Student model
    const students = await Student.find({});

    return res.render("home", {
      title: "Home Page",
      all_students: students,
    });
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};
