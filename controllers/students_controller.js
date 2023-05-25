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

//function to edit student details
module.exports.editStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);

  //if student found render edit student page

  return res.render("edit_student", {
    title: "Edit Student",
    student_details: student,
  });
};

//update student function
module.exports.updateStudent = async (req, res) => {
  try {
    //get student details from form
    const student = await Student.findById(req.params.id);
    const {
      name,
      email,
      college,
      batch,
      placement_status,
      "courseScores.dsaFinalScore": dsaFinalScore,
      "courseScores.webDFinalScore": webDFinalScore,
      "courseScores.reactFinalScore": reactFinalScore,
    } = req.body;

    //student id not present
    if (!student) {
      req.flash("error", "Student does not exist!");
      return res.redirect("back");
    }
    //update student details
    student.name = name;
    student.email = email;
    student.college = college;
    student.batch = batch;
    student.placement_status = placement_status;
    student.courseScores.dsaFinalScore = dsaFinalScore;
    student.courseScores.webDFinalScore = webDFinalScore;
    student.courseScores.reactFinalScore = reactFinalScore;
    //save student details
    await student.save();
    //redirect to student list page
    //req.flash("success", "Student Details Updated Successfully");
    console.log("success", "Student Details Updated Successfully");
    return res.redirect("/");
  } catch (err) {
    // req.flash("error", err);
    console.log(err);
    return res.redirect("back");
  }
};
