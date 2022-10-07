// Handles initial GET request for the homepage
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, homeController.getProfile);
router.get("/plan", ensureAuth, homeController.getPlan);
router.get("/feed", ensureAuth, homeController.getFeed);
router.get("/sunday", ensureAuth, homeController.getSunday);
router.get("/monday", ensureAuth, homeController.getMonday);
router.get("/tuesday", ensureAuth, homeController.getTuesday);
router.get("/wednesday", ensureAuth, homeController.getWednesday);
router.get("/thursday", ensureAuth, homeController.getThursday);
router.get("/friday", ensureAuth, homeController.getFriday);
router.get("/saturday", ensureAuth, homeController.getSaturday);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
