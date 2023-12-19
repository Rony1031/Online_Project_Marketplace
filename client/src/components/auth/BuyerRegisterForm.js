import React, { useState } from "react";
import axios from "axios";

const BuyerRegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      // Validate input fields
      if (!username || !password) {
        setError("Please fill in all fields");
        return;
      }

      // Send registration request to the server
      const response = await axios.post("http://your-api-url/buyer/register", {
        username,
        password,
      });

      // Check for successful registration
      if (response.status === 201) {
        console.log("Buyer registered successfully");
        // You may redirect to the buyer dashboard or display a success message
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during buyer registration:", error.message);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Buyer Registration</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default BuyerRegisterForm;
