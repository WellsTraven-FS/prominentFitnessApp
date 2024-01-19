const express = require("express");
const passport = require("passport");
const passportService = require("../services/passport");
const router = express.Router();

const requireLogin = passport.authenticate("local", { session: false });

const AuthenticationController = require("../controller/authentication_controller");

// ------ GET ALL ROUTES ------ //
router.post("/", AuthenticationController.signup);
router.post("/signin", requireLogin, AuthenticationController.signin);

module.exports = router;
