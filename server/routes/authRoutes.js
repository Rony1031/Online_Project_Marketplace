const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register/buyer", authController.registerBuyer);
router.post("/register/seller", authController.registerSeller);
router.post("/login/buyer", authController.loginBuyer);
router.post("/login/seller", authController.loginSeller);

module.exports = router;
