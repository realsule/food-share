import { useState, useEffect } from "react";

function Dashboard() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8001/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;

  const totalDonations = listings.length;
  const totalLocations = [...new Set(listings.map((item) => item.location))].length;

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard 📊</h2>
      <p>
        <strong>Total Active Donations:</strong> {totalDonations}
      </p>
      <p>
        <strong>Unique Locations:</strong> {totalLocations}
      </p>

      <h3>Current Listings:</h3>
      <ul>
        {listings.map((item) => (
          <li key={item.id}>
            {item.title} — {item.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
