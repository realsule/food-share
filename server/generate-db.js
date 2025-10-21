const fs = require("fs");

const foods = [
  "Rice", "Chapati", "Beans", "Fries", "Pilau", "Ugali", "Githeri",
  "Fish", "Bread", "Porridge", "Ndengu", "Minji", "Beef Stew", "Nyama Choma",
  "Samosa", "Kachumbari"
];

const locations = [
  "Kibera", "Westlands", "Kawangware", "Donholm", "Langata",
  "South B", "Kasarani", "Gikomba", "Eastleigh", "Embakasi"
];

// Create listings — each location gets a few random foods
const listings = [];

locations.forEach((location, index) => {
  const numFoods = Math.floor(Math.random() * 4) + 2; // 2–5 foods per location
  const usedFoods = new Set();

  for (let i = 0; i < numFoods; i++) {
    // Pick a random unique food for this location
    let food;
    do {
      food = foods[Math.floor(Math.random() * foods.length)];
    } while (usedFoods.has(food));
    usedFoods.add(food);

    listings.push({
      id: listings.length + 1,
      food,
      quantity: `${Math.floor(Math.random() * 10) + 1} units`,
      location,
      status: "available"
    });
  }
});

const db = { listings, users: [] };

// Write db.json file
fs.writeFileSync("server/db.json", JSON.stringify(db, null, 2));
console.log(`✅ Generated ${listings.length} food listings across ${locations.length} locations successfully!`);
