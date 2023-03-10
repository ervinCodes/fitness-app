const express = require("express");
const router = express.Router();
const editController = require("../controllers/edits");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/modalInfo/:id", ensureAuth, editController.getModalInfo);

router.put("/editModalInfo/:id", ensureAuth, editController.editModalInfo);

module.exports = router;
