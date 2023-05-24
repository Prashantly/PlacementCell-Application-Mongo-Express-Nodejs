const express = require("express");
const router = express.Router();
const interviewsController = require("../controllers/interviews_controller");

router.get("/add-interview", interviewsController.addInterview);
router.post("/create", interviewsController.createInterview);

module.exports = router;
