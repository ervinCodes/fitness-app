const express = require("express");
const router = express.Router();
const editsController = require("../controllers/edits");

router.put("/editSundayWorkout", editsController.editSundayWorkout);

module.exports = router;
