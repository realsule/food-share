import { useState, useEffect } from "react";

function Donate() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [listings, setListings] = useState([]);

  // Fetch existing listings
  useEffect(() => {
    fetch("http://localhost:8001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  // Handle new donation submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = { title, location };

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
        setTitle("");
        setLocation("");
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Donate Food 🍛</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Food Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginRight: 10 }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ marginRight: 10 }}
        />
        <button type="submit">Add Donation</button>
      </form>

      <h3 style={{ marginTop: 20 }}>Existing Donations</h3>
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

export default Donate;
