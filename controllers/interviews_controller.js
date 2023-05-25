const Interview = require("../models/interview");
const Student = require("../models/student");

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

// allocation of student to an interview
module.exports.assignInterview = async (req, res) => {
  try {
    // get interview id from parameter passed to the URL
    const interviewId = req.params.id;
    // console.log(req.body);
    const { student, result } = req.body;
    // console.log(studentId, result);
    let interview = await Interview.findById(interviewId);
    // console.log("interview", interview);

    if (interview) {
      // if interview is found
      const studentData = await Student.findById(student);

      if (studentData) {
        // if student is found
        // check if student already allocated in interview model
        let alreadyAllocated = await Interview.findOne({
          _id: interviewId,
          "students.student": student,
        });

        if (alreadyAllocated) {
          // if student already allocated in interview
          // req.flash(
          //   "error",
          //   `${student.name} already enrolled in ${interview.company} interview!!`
          // );

          return res.redirect("back");
        }
        // if student not allocated in interview
        // add student and result into students array
        interview.students.push({
          student: student,
          result,
        });

        await interview.save();

        console.log("company", interview.company);
        console.log("date", interview.date);
        console.log("result", result);
        //need to assign interview company date and result into interviews array of student model
        let assignedInterview = {
          company: interview.company,
          date: interview.date,
          result: result,
        };

        console.log("assignedInterview", assignedInterview);
        await studentData.updateOne({
          $push: { interviews: assignedInterview },
        });

        // req.flash(
        //   "success",
        //   `${student.name} enrolled in ${interview.company} interview!!`
        // );
        return res.redirect("back");
      }

      // req.flash("error", "Student not found!");
      return res.redirect("back");
    }

    // req.flash("error", "Interview not found!");
    return res.redirect("back");
  } catch (err) {
    console.log("Error:", err);
    // req.flash("error", "Error in enrolling interview!");
  }
};
