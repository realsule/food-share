const fs = require("fs");

const foods = [
  "Rice", "Chapati", "Beans", "Fries", "Pilau", "Ugali", "Sukuma Wiki", "Mandazi",
  "Githeri", "Fish", "Bread", "Porridge", "Ndengu", "Minji", "Matoke", "Cabbage",
  "Beef Stew", "Nyama Choma", "Samosa", "Kachumbari"
];

const locations = [
  "Kibera", "Westlands", "Kawangware", "Donholm", "Langata", "Embakasi",
  "South B", "Kasarani", "Gikomba", "Eastleigh"
];

const listings = [];

for (let i = 1; i <= 50; i++) {
  listings.push({
    id: i,
    food: foods[Math.floor(Math.random() * foods.length)],
    quantity: `${Math.floor(Math.random() * 20) + 1} units`,
    location: locations[Math.floor(Math.random() * locations.length)],
    status: "available"
  });
}

const db = { listings, users: [] };

fs.writeFileSync("server/db.json", JSON.stringify(db, null, 2));
console.log("✅ Generated 50 food listings successfully!");
