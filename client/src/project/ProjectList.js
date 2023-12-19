import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch projects when the component mounts
    const fetchProjects = async () => {
      try {
        // You need to replace 'your-api-url' with the actual URL
        const response = await axios.get("http://your-api-url/project-list", {
          // You may include headers or authentication tokens here
        });

        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error.message);
        setError("Error fetching projects. Please try again.");
      }
    };

    fetchProjects();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h2>Project List</h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <strong>{project.title}</strong>
              <p>{project.description}</p>
              <p>Tags: {project.tags.join(", ")}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ProjectList;
