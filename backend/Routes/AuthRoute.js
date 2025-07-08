const express = require("express");
const {
  Signup,
  Login,
  Logout,
  userVerification,
} = require("../Controllers/AuthController");

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/verify", userVerification);

module.exports = router;
