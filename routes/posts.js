const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createSundayWorkout", postsController.createSundayWorkout);

router.post("/createPost", postsController.createPost);

router.put("/markComplete", postsController.markComplete);

router.put("/markIncomplete", postsController.markIncomplete);

router.put("/resetWorkout", postsController.resetWorkout);

router.put("/deleteWorkout", postsController.deleteWorkout);

router.get("/:id", ensureAuth, postsController.getPost);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
