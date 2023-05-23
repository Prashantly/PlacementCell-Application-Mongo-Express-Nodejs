const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students_controller");

router.get("/add-student", studentsController.addStudent);

module.exports = router;
