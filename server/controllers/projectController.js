const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const ownerId = req.user.userId; // Assuming user ID is stored in the JWT

    const newProject = new Project({ title, description, tags, ownerId });
    await newProject.save();

    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createProject,
  getProjects,
};
