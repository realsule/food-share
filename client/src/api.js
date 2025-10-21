const API_URL = "http://localhost:8001";

export async function getListings() {
  const res = await fetch(`${API_URL}/listings`);
  return res.json();
}

export async function addListing(listing) {
  const res = await fetch(`${API_URL}/listings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listing),
  });
  return res.json();
}
