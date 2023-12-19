const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
