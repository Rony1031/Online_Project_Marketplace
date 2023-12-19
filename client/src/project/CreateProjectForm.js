import React, { useState } from "react";
import axios from "axios";

const CreateProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const handleCreateProject = async () => {
    try {
      // Validate input fields
      if (!title || !description || !tags) {
        setError("Please fill in all fields");
        return;
      }

      // Split the tags input into an array
      const tagsArray = tags.split(",");

      // Send project creation request to the server
      const response = await axios.post("http://your-api-url/create-project", {
        title,
        description,
        tags: tagsArray,
      });

      // Check for successful project creation
      if (response.status === 201) {
        console.log("Project created successfully");
        // You may redirect to the project list or display a success message
      } else {
        setError("Project creation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during project creation:", error.message);
      setError("Project creation failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Tags (comma-separated):</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="button" onClick={handleCreateProject}>
          Create Project
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default CreateProjectForm;
