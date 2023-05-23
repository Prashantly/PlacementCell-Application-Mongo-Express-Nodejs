const Student = require("../models/student");

module.exports.addStudent = function (req, res) {
  return res.render("add_student", {
    title: "Add student",
  });
};

// creation of new student
module.exports.createStudent = async (req, res) => {
  try {
    const { name, email, college, batch, placement_status, courseScores } =
      req.body;
    const { dsaFinalScore, webDFinalScore, reactFinalScore } = courseScores;

    // check if student already exist
    const student = await Student.findOne({ email });
    if (!student) {
      // create new student using Student model
      const newStudent = await Student.create({
        name,
        email,
        college,
        batch,
        placement_status,
        courseScores: {
          dsaFinalScore,
          webDFinalScore,
          reactFinalScore,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Student added successfully!",
        student: newStudent,
      });
    } else {
      // req.flash("error", "Student already exist!");
      return res.json({ success: false, message: "Student already exists!" });
    }
  } catch (err) {
    console.log(err);
    // Error occurred
    res.status(500).json({ success: false, message: "Error adding student." });
  }
};
