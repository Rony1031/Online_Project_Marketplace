const express = require("express");
const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/projects", authMiddleware, projectController.createProject);
router.get("/projects", projectController.getProjects);

module.exports = router;
