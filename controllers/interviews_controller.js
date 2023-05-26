const { closeDelimiter } = require("ejs");
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
    // console.log(interview);
    req.flash("success", "Interview added!");
    return res.redirect("/");
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

    const { student, result } = req.body;

    let interview = await Interview.findById(interviewId);

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
          req.flash(
            "error",
            `${studentData.name} already enrolled in ${interview.company} interview!!`
          );

          return res.redirect("back");
        }
        // if student not allocated in interview
        // add student and result into students array
        interview.students.push({
          student: student,
          result,
        });

        await interview.save();

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

        req.flash(
          "success",
          `${studentData.name} enrolled in ${interview.company} interview!!`
        );
        return res.redirect("back");
      }

      req.flash("error", "Student not found!");
      return res.redirect("back");
    }

    req.flash("error", "Interview not found!");
    return res.redirect("back");
  } catch (err) {
    console.log("Error:", err);
    req.flash("error", "Error in enrolling interview!");
  }
};

// deallocation of student to an interview
module.exports.deallocate = async (req, res) => {
  try {
    let studentName;
    const { studentId, interviewId } = req.params;

    //remove student from students array in Interview model
    const interview = await Interview.findById(interviewId);

    if (interview) {
      //remove reference of student in inteview schema
      await Interview.findOneAndUpdate(
        { _id: interviewId },
        {
          $pull: {
            students: {
              student: studentId,
            },
          },
        }
      );

      // remove interview from student's schema using interview's company
      const studentData = await Student.findOne({ _id: studentId });
      if (studentData) {
        studentName = studentData.name;
        //remove student from student's interviews array
        await studentData.updateOne({
          $pull: {
            interviews: {
              company: interview.company,
            },
          },
        });
      }

      //add flash message
      req.flash(
        "success",
        `${studentName} removed from ${interview.company} successfully!`
      );
      return res.redirect("back");
    } else {
      req.flash("error", "Interview not found!");
      return res.redirect("back");
    }
  } catch (err) {
    req.flash("error", "Error in removing student");
    console.log("Error:", err);
  }
};
