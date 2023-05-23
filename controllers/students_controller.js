const Student = require("../models/student");

module.exports.addStudent = function (req, res) {
  return res.render("add_student", {
    title: "Add student",
  });
};
