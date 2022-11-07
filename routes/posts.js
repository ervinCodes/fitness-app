const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

// router.post("/createPost", postsController.createPost);

router.put("/markComplete", postsController.markComplete);

router.put("/markIncomplete", postsController.markIncomplete);

router.put("/resetWorkout", postsController.resetWorkout);

router.delete("/deleteWorkout", postsController.deleteWorkout);

module.exports = router;
