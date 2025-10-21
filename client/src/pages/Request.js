import { useState, useEffect } from "react";

function Request() {
  const [listings, setListings] = useState([]);

  // Fetch available food listings
  useEffect(() => {
    fetch("http://localhost:8001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  // Handle requesting an item (delete from DB for now)
  const handleRequest = (id) => {
    fetch(`http://localhost:8001/listings/${id}`, {
      method: "DELETE",
    }).then(() => {
      setListings(listings.filter((item) => item.id !== id));
      alert("Request sent! The donor will be contacted.");
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Available Food Donations 🍽️</h2>
      {listings.length === 0 ? (
        <p>No available donations at the moment.</p>
      ) : (
        <ul>
          {listings.map((item) => (
            <li key={item.id} style={{ marginBottom: 10 }}>
              <strong>{item.title}</strong> — {item.location}{" "}
              <button
                onClick={() => handleRequest(item.id)}
                style={{ marginLeft: 10 }}
              >
                Request
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Request;
