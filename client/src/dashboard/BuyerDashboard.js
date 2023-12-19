import React, { useEffect, useState } from "react";
import axios from "axios";

const BuyerDashboard = () => {
  const [buyerInfo, setBuyerInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch buyer information when the component mounts
    const fetchBuyerInfo = async () => {
      try {
        // You need to replace 'your-api-url' with the actual URL
        const response = await axios.get(
          "http://your-api-url/buyer/dashboard",
          {
            // You may include headers or authentication tokens here
          }
        );

        setBuyerInfo(response.data);
      } catch (error) {
        console.error("Error fetching buyer information:", error.message);
        setError("Error fetching buyer information. Please try again.");
      }
    };

    fetchBuyerInfo();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h2>Buyer Dashboard</h2>
      {buyerInfo ? (
        <div>
          <p>Welcome, {buyerInfo.username}!</p>
          {/* Display additional buyer information as needed */}
        </div>
      ) : (
        <p>Loading buyer information...</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BuyerDashboard;
