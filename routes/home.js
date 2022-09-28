// Handles initial GET request for the homepage
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const postsController = require("../controllers/posts");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/plan", ensureAuth, postsController.getPlan);
router.get("/sunday", ensureAuth, postsController.getSunday);
router.get("/monday", ensureAuth, postsController.getMonday);
router.get("/tuesday", ensureAuth, postsController.getTuesday);
router.get("/wednesday", ensureAuth, postsController.getWednesday);
router.get("/thursday", ensureAuth, postsController.getThursday);
router.get("/friday", ensureAuth, postsController.getFriday);
router.get("/saturday", ensureAuth, postsController.getSaturday);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
