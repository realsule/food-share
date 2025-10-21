import { useState, useEffect } from "react";

function Donate() {
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [listings, setListings] = useState([]);

  // Fetch existing donations
  useEffect(() => {
    fetch("http://localhost:8001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching listings:", err));
  }, []);

  // Handle new donation
  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      food,
      quantity,
      location,
      status: "available",
    };

    fetch("http://localhost:8001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        setListings([...listings, data]);
        setFood("");
        setQuantity("");
        setLocation("");
      })
      .catch((err) => console.error("Error adding listing:", err));
  };

  // Group donations by location
  const groupedListings = listings.reduce((acc, item) => {
    if (!acc[item.location]) acc[item.location] = [];
    acc[item.location].push(`${item.food} (${item.quantity})`);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Donate Food 🍛</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Food name (e.g. Rice)"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Quantity (e.g. 5 units)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location (e.g. Kibera)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit" style={{ background: "#222", color: "#fff" }}>
          Add Donation
        </button>
      </form>

      <h3>Available Donations 🍽️</h3>
      {Object.entries(groupedListings).map(([loc, foods]) => (
        <div key={loc} style={{ marginBottom: "15px" }}>
          <strong>{loc}</strong>
          <ul style={{ marginLeft: "20px" }}>
            {foods.map((foodItem, i) => (
              <li key={i}>{foodItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Donate;
