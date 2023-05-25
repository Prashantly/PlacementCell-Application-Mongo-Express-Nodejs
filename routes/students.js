const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students_controller");

router.get("/add-student", studentsController.addStudent);

router.post("/create", studentsController.createStudent);

//editing student details
router.get("/edit-student/:id", studentsController.editStudent);

router.post("/update-student/:id", studentsController.updateStudent);

//delete student
router.get("/delete-student/:id", studentsController.deleteStudent);

module.exports = router;
