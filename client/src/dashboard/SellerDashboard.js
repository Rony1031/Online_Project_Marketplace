import React, { useEffect, useState } from "react";
import axios from "axios";

const SellerDashboard = () => {
  const [sellerInfo, setSellerInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch seller information when the component mounts
    const fetchSellerInfo = async () => {
      try {
        // You need to replace 'your-api-url' with the actual URL
        const response = await axios.get(
          "http://your-api-url/seller/dashboard",
          {
            // You may include headers or authentication tokens here
          }
        );

        setSellerInfo(response.data);
      } catch (error) {
        console.error("Error fetching seller information:", error.message);
        setError("Error fetching seller information. Please try again.");
      }
    };

    fetchSellerInfo();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h2>Seller Dashboard</h2>
      {sellerInfo ? (
        <div>
          <p>Welcome, {sellerInfo.username}!</p>
          {/* Display additional seller information as needed */}
        </div>
      ) : (
        <p>Loading seller information...</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SellerDashboard;
