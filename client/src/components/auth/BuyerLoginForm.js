import React, { useState } from "react";
import axios from "axios";

const BuyerLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Validate input fields
      if (!username || !password) {
        setError("Please fill in all fields");
        return;
      }

      // Send login request to the server
      const response = await axios.post("http://your-api-url/buyer/login", {
        username,
        password,
      });

      // Check for successful login
      if (response.status === 200 && response.data.token) {
        console.log("Buyer logged in successfully");
        // Save the token to localStorage or manage user authentication state
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during buyer login:", error.message);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Buyer Login</h2>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default BuyerLoginForm;
