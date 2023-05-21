const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");

router.get("/profile", usersController.profile);

//router for sign-up and sign-in pages
router.get("/signup", usersController.getSignup);
router.get("/signin", usersController.getSignin);

module.exports = router;
